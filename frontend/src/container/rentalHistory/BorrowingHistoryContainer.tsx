// 외부모듈
import { Box } from "@mui/material";

// 내부모듈
import HistoryList from "@components/rentalHistory/HistoryList";

const BorrowingHistoryContainer = () => {
  return (
    <Box>
      <HistoryList list={[]} />
    </Box>
  );
};

export default BorrowingHistoryContainer;
