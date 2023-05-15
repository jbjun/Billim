// 외부모듈
import { Box } from "@mui/material";

// 내부모듈
import HistoryItem from "@components/rentalHistory/HistoryItem";
import Empty from "@components/common/Empty";
import { IRentalHistory } from "@type/reservation";

interface IHistoryListProps {
  list: IRentalHistory[];
  type: "lend" | "borrow";
}

const HistoryList = ({ list, type }: IHistoryListProps) => {
  if (list.length === 0)
    return <Empty message="비어있습니다 빌림을 적극 이용해보세요." />;
  return (
    <Box>
      {list.map((item, i) => (
        <HistoryItem key={i} item={item} type={type} />
      ))}
    </Box>
  );
};

export default HistoryList;
