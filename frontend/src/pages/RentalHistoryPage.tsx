// 내부모듈
import Header from "@components/layout/Header";
import RentalHistoryContainer from "@container/rentalHistory/RentalHistoryContainer";

const RentalListPage = () => {
  return (
    <>
      <Header title="대여내역" />
      <RentalHistoryContainer />
    </>
  );
};

export default RentalListPage;
