// 내부모듈
import Header from "@components/layout/Header";
import BorrowAndLendContainer from "@container/rentalHistory/BorrowAndLendContainer";

const RentalListPage = () => {
  return (
    <>
      <Header title="대여내역" />
      <BorrowAndLendContainer />
    </>
  );
};

export default RentalListPage;
