// 외부모듈
import { useReducer } from "react";
import { Typography, Container, Box, Snackbar } from "@mui/material";
import { differenceInDays } from "date-fns";
import { animated, useSpring } from "@react-spring/web";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// 내부모듈
import Dialog from "@components/layout/Dialog";
import ChatList from "@components/home/productDetail/ChatList";
import ReservationDate from "@components/home/productDetail/ReservationDate";
import Confirm from "@components/home/productDetail/Confirm";

interface IReservationContainerProps {
  open: boolean;
  onClose: () => void;
}

export interface ICustomer {
  name: string;
}

export interface IReservationDate {
  startDate: Date;
  endDate: Date;
  key: string;
  [key: string]: any;
}

interface IState {
  customer: ICustomer;
  reservationDate: IReservationDate;
  totalPrice: number;
  index: number;
}

type TAction =
  | { type: "NEXT_INDEX" }
  | { type: "PREV_INDEX" }
  | { type: "SELECT_CUSTOMER"; payload: ICustomer }
  | {
      type: "SELECT_RESERVTION_DATE";
      payload: { reservationDate: IReservationDate; price: number };
    };

// 가격 서버로부터 얻어오면 totalPrice 변경
const initialState: IState = {
  customer: { name: "" },
  reservationDate: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
  totalPrice: 2000,
  index: 0,
};

const reducer = (state = initialState, action: TAction): IState => {
  switch (action.type) {
    case "PREV_INDEX":
      return { ...state, index: state.index - 1 };
    case "NEXT_INDEX":
      return { ...state, index: state.index + 1 };
    case "SELECT_CUSTOMER": {
      return { ...state, customer: action.payload };
    }
    case "SELECT_RESERVTION_DATE": {
      const {
        payload: { reservationDate, price },
      } = action;
      const { startDate, endDate } = reservationDate;
      const totalPrice = (differenceInDays(endDate, startDate) + 1) * price;
      return { ...state, reservationDate, totalPrice };
    }
    default:
      return state;
  }
};

const ReservationDialogContainer = ({
  open,
  onClose,
}: IReservationContainerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { customer, reservationDate, totalPrice, index } = state;

  const handleNext = () => dispatch({ type: "NEXT_INDEX" });
  const handlePrev = () => dispatch({ type: "PREV_INDEX" });
  const handleCustomer = (customer: ICustomer) =>
    dispatch({ type: "SELECT_CUSTOMER", payload: customer });
  const handleReservationDate = (
    reservationDate: IReservationDate,
    price: number
  ) =>
    dispatch({
      type: "SELECT_RESERVTION_DATE",
      payload: { reservationDate, price },
    });

  const { x } = useSpring({
    x: -100 * index,
  });

  const components = [
    <ChatList
      key="chatList"
      handleNext={handleNext}
      handleCustomer={handleCustomer}
      customer={customer}
    />,
    <ReservationDate
      reservationDate={reservationDate}
      totalPrice={totalPrice}
      key="reservationDate"
      handleNext={handleNext}
      handlePrev={handlePrev}
      handleReservationDate={handleReservationDate}
    />,
    <Confirm key="confirm" {...state} handlePrev={handlePrev} />,
  ];

  // 임시 스낵바 때내야 함

  // 원복 그리고 confirm 가장 밖에 box 제거
  //   <Container >
  //   {components[index]}
  // </Container>

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
        <animated.div
          style={{
            display: "flex",
            transform: x.to((val) => `translateX(${val}%)`),
          }}
        >
          {components.map((component) => (
            <Container key={component.key}>
              <div style={{ width: "100%", flexShrink: 0 }}>{component}</div>
            </Container>
          ))}
        </animated.div>
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
