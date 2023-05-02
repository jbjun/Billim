// 외부모듈
import { Box } from "@mui/material";

// 내부모듈
import { IRentalHistory } from "./RentalHistoryContainer";
import HistoryList from "@components/rentalHistory/HistoryList";

const RENTAL_HISTORYS: IRentalHistory[] = [
  {
    duration: {
      startDate: new Date(),
      endDate: new Date(),
    },
    status: "renting",
    location: "자양동",
    lender: "빌림공구아저씨",
    borrower: "이빌리",
    price: 30000,
    productName: "해머드릴 - 밀워키 M18 FPD3",
    img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1422&q=80",
  },
  {
    duration: {
      startDate: new Date(),
      endDate: new Date(),
    },
    status: "returned",
    location: "자양동",
    lender: "공구아저씨",
    borrower: "이빌리",
    price: 210000,
    productName: "해머드릴 - 밀워키 M18 FPD3",
    img: "https://images.unsplash.com/photo-1611761226428-0a3ec16d2e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    duration: {
      startDate: new Date(),
      endDate: new Date(),
    },
    status: "returned",
    location: "자양동",
    lender: "건대드림클로젯",
    borrower: "이빌리",
    price: 5000,
    productName: "해머드릴 - 밀워키 M18 FPD3",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const BorrowedHistoryContainer = () => {
  return (
    <Box>
      <HistoryList list={RENTAL_HISTORYS} />
    </Box>
  );
};

export default BorrowedHistoryContainer;
