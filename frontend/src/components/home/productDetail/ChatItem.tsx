// 외부모듈
import { Avatar, Box, Divider, Typography } from "@mui/material";

// 내부모듈
import { ICustomer } from "@container/home/productDetail/ReservationDialogContainer";

interface IChatItemProps {
  name: string;
  productName: string;
  lastChat: string;
}

const ChatItem = ({ name, productName, lastChat }: IChatItemProps) => {
  return (
    <Box height="84px" padding="0 16px">
      <Box display="flex" padding="18px 0">
        <Avatar sx={{ width: "48px", height: "48px" }} />
        <Box ml="12px">
          <Typography
            variant="t7"
            display="inline-block"
            mr="4px"
            maxWidth="20vw"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            sx={{ verticalAlign: "middle" }}
          >
            {name}
          </Typography>
          <Typography
            variant="b7"
            display="inline-block"
            width="calc(100vw - 20vw - 96px )"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            sx={{ verticalAlign: "middle" }}
          >
            {productName}
          </Typography>
          <Typography
            width="calc(100vw - 92px)"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            component="p"
            variant="b5"
          >
            {lastChat}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default ChatItem;
