// 외부모듈
import { Container } from "@mui/material";
import { ReactNode } from "react";

// 내부모듈
import RentalHistoryTab from "@components/rentalHistory/RentalHistoryTab";
import LendHistoryConttainer from "@container/rentalHistory/LendHistoryContainer";
import BorrowHistoryContainer from "./BorrowHistoryContainer";
import { RentStatusType } from "@type/product";
import { useGetBorrowList, useGetLendList } from "@lib/hooks/query/reservation";
import RentalHistorySkeleton from "@components/rentalHistory/RentalHistorySkeleton";

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

const BorrowAndLendContainer = () => {
  const { data: lendList } = useGetLendList("1"); // TODO
  const { data: borrowList } = useGetBorrowList("1"); // TODO
  const isLoading = !lendList || !borrowList;

  if (isLoading) return <RentalHistorySkeleton />;

  const tabs: ITabs[] = [
    {
      label: `빌린 내역 (${borrowList ? borrowList.length : 0})`,
      component: <BorrowHistoryContainer borrowList={borrowList} />,
    },
    {
      label: `빌려준 내역 (${lendList ? lendList.length : 0})`,
      component: <LendHistoryConttainer lendList={lendList} />,
    },
  ];

  return (
    <Container sx={{ mt: "20px", pb: "56px" }}>
      <RentalHistoryTab tabs={tabs} />
    </Container>
  );
};

export default BorrowAndLendContainer;
