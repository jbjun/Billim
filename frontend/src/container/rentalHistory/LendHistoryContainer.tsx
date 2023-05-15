// 외부모듈
import { Box } from "@mui/material";

// 내부모듈
import HistoryList from "@components/rentalHistory/HistoryList";
import { IRentalHistory } from "@type/reservation";

interface ILendHistoryContainerProps {
  lendList: IRentalHistory[];
}

const LendHistoryContainer = ({ lendList }: ILendHistoryContainerProps) => {
  return (
    <Box>
      <HistoryList list={lendList} type="lend" />
    </Box>
  );
};

export default LendHistoryContainer;
