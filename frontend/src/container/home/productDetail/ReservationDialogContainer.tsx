// 외부모듈
import { useReducer } from "react";
import { Typography, Container, Box, Snackbar } from "@mui/material";
import { differenceInDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useParams } from "react-router";

// 내부모듈
import Dialog from "@components/layout/Dialog";
import ChatList from "@components/home/productDetail/ChatList";
import ReservationDate from "@components/home/productDetail/ReservationDate";
import Confirm from "@components/home/productDetail/Confirm";
import { useReservation } from "@lib/hooks/query/reservation";
import { IFirestoreTimestamp } from "@type/firebase";

interface IReservationContainerProps {
  open: boolean;
  onClose: () => void;
  lenderId: string;
  price: number;
  borrowedDays: IFirestoreTimestamp[];
}

export interface IBorrower {
  id: string;
  name: string;
}

export interface ILender {
  id: string;
  name: string;
}

export interface IReservationDate {
  startDate: any;
  endDate: any;
  key: string;
  [key: string]: any;
}

export interface ReservationState {
  borrower: IBorrower;
  reservationDate: IReservationDate;
  totalPrice: number;
  index: number;
  productId: string;
  lender: ILender;
}

type TAction =
  | { type: "INIT" }
  | { type: "NEXT_INDEX" }
  | { type: "PREV_INDEX" }
  | { type: "SELECT_BORROWER"; payload: IBorrower }
  | {
      type: "SELECT_RESERVTION_DATE";
      payload: { reservationDate: IReservationDate; price: number };
    };

// TODO borrower, lender 닉네임 채워넣기
const initialState: ReservationState = {
  borrower: { name: "", id: "" },
  lender: { name: "", id: "" },
  reservationDate: {
    startDate: null,
    endDate: new Date(""),
    key: "selection",
  },
  totalPrice: 0,
  productId: "",
  index: 0,
};

const reducer = (state = initialState, action: TAction): ReservationState => {
  switch (action.type) {
    case "INIT":
      return { ...initialState };
    case "PREV_INDEX":
      return { ...state, index: state.index - 1 };
    case "NEXT_INDEX":
      return { ...state, index: state.index + 1 };
    case "SELECT_BORROWER": {
      return { ...state, borrower: action.payload };
    }
    case "SELECT_RESERVTION_DATE": {
      const {
        payload: { reservationDate, price },
      } = action;

      const { startDate, endDate } = reservationDate;

      const totalPrice = (differenceInDays(endDate, startDate) + 1) * price;
      return {
        ...state,
        reservationDate: {
          ...reservationDate,
          endDate: new Date(endDate.setHours(23, 59, 59, 59)),
        },
        totalPrice,
      };
    }
    default:
      return state;
  }
};

const ReservationDialogContainer = ({
  open,
  onClose,
  lenderId,
  price,
  borrowedDays,
}: IReservationContainerProps) => {
  const { id: productId } = useParams();
  const { mutate: reservation } = useReservation();
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    productId: productId as string,
    totalPrice: 0,
    lender: { id: lenderId, name: "이빌리" }, // TODO 네임 가져오기
  });
  const { borrower, reservationDate, totalPrice, index } = state;

  const handleNext = () => dispatch({ type: "NEXT_INDEX" });
  const handlePrev = () => dispatch({ type: "PREV_INDEX" });
  const habdleBorrower = (borrower: IBorrower) =>
    dispatch({ type: "SELECT_BORROWER", payload: borrower });
  const handleReservationDate = (reservationDate: IReservationDate) =>
    dispatch({
      type: "SELECT_RESERVTION_DATE",
      payload: { reservationDate, price },
    });

  const handleReservation = () => {
    reservation(state);
    onClose();
  };

  const components = [
    <ChatList
      key="chatList"
      handleNext={handleNext}
      handleBorrower={habdleBorrower}
      borrower={borrower}
    />,
    <ReservationDate
      borrowedDays={borrowedDays}
      reservationDate={reservationDate}
      totalPrice={totalPrice}
      key="reservationDate"
      handleNext={handleNext}
      handlePrev={handlePrev}
      handleReservationDate={handleReservationDate}
    />,
    <Confirm
      key="confirm"
      {...state}
      price={price}
      handlePrev={handlePrev}
      handleReservation={handleReservation}
    />,
  ];

  return (
    <>
      <Dialog
        title="대여예약"
        open={open}
        onClose={onClose}
        disableAdornment
        PaperProps={{
          style: {
            bottom: 0,
            position: "absolute",
            marginBottom: 0,
            borderRadius: "10px 10px 0 0",
            width: "100vw",
            overflowX: "hidden",
          },
        }}
      >
        <Container>{components[index]}</Container>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={index === 3}
        autoHideDuration={1000}
      >
        <Box
          width="204px"
          borderRadius="4px"
          height="47px"
          bgcolor="rgba(34, 34, 34, 0.7);"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="b5" color="white">
            대여 예약이 완료되었습니다
          </Typography>
        </Box>
      </Snackbar>
    </>
  );
};

export default ReservationDialogContainer;
