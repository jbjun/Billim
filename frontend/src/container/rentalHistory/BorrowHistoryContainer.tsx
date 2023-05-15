// 외부모듈
import { Box } from "@mui/material";

// 내부모듈
import HistoryList from "@components/rentalHistory/HistoryList";
import { IRentalHistory } from "@type/reservation";

interface IBorrowHistoryContainerProps {
  borrowList: IRentalHistory[];
}

const BorrowHistoryContainer = ({
  borrowList,
}: IBorrowHistoryContainerProps) => {
  return (
    <Box>
      <HistoryList list={borrowList} type="borrow" />
    </Box>
  );
};

export default BorrowHistoryContainer;
