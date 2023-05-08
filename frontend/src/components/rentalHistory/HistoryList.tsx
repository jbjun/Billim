import { Box } from "@mui/material";
import HistoryItem from "./HistoryItem";
import Empty from "../common/Empty";

interface IHistoryListProps {
  list: any[];
}

const HistoryList = ({ list }: IHistoryListProps) => {
  if (list.length === 0)
    return <Empty message="비어있습니다 빌림을 적극 이용해보세요." />;
  return (
    <Box>
      {list.map((item, i) => (
        <HistoryItem key={i} item={item} />
      ))}
    </Box>
  );
};

export default HistoryList;
