// 외부모듈
import { Container } from "@mui/material";
import { ReactNode } from "react";

// 내부모듈
import RentalHistoryTab from "@components/rentalHistory/RentalHistoryTab";
import BorrowedHistory from "@container/rentalHistory/BorrowedHistoryContainer";
import BorrowingHistory from "./BorrowingHistoryContainer";
import { RentStatusType } from "@type/product";

interface ITabs {
  label: string;
  component: ReactNode;
}

export interface IRentalHistory {
  duration: {
    startDate: Date;
    endDate: Date;
  };
  status: RentStatusType;
  location: string;
  price: number;
  lender: string;
  borrower: string;
  productName: string;
  img: string;
}

const RentalHistoryContainer = () => {
  const tabs: ITabs[] = [
    { label: "빌린 내역 (12)", component: <BorrowedHistory /> },
    { label: "빌려준 내역 (0)", component: <BorrowingHistory /> },
  ];

  return (
    <Container sx={{ mt: "20px", pb: "56px" }}>
      <RentalHistoryTab tabs={tabs} />
    </Container>
  );
};

export default RentalHistoryContainer;
