import { Box } from "@mui/material";
import HistoryItem from "./HistoryItem";
import Empty from "./Empty";

interface IHistoryListProps {
  list: any[];
}

const HistoryList = ({ list }: IHistoryListProps) => {
  if (list.length === 0) return <Empty />;
  return (
    <Box>
      {list.map((item, i) => (
        <HistoryItem key={i} item={item} />
      ))}
    </Box>
  );
};

export default HistoryList;
