// 외부모듈
import { Box, Button, Stack, Typography } from "@mui/material";

// 내부모듈
import ChatItem from "@components/home/productDetail/ChatItem";
import { IBorrower } from "@container/home/productDetail/ReservationDialogContainer";

const CHAT_LIST = [
  {
    name: "김빌리",
    productName: "가정용 헤머드릴",
    lastChat:
      "안녕하세요. 빌리진님 해머드릴 키드에 관심이 있는 사람입니다. 민지왔어요 뿌잉뿌잉",
  },
  {
    name: "이빌리",
    productName: "가정용 헤머드릴",
    lastChat: "사이즈가 정확히 어떻게 되나요?",
  },
  {
    name: "정빌리",
    productName: "가정용 헤머드릴",
    lastChat: "그건 세돌이도 마찬가지 아니냐?",
  },
];

interface IChatList {
  borrower: IBorrower;
  handleNext: () => void;
  handleBorrower: (borrower: IBorrower) => void;
}

const ChatList = ({ borrower, handleBorrower, handleNext }: IChatList) => {
  const notSelected = !borrower.name || borrower.name === "";
  return (
    <Stack pt="20px">
      <Typography component="p" variant="t4" p="0px 4px">
        어떤 이웃에게 빌려주시나요?
      </Typography>
      <Box
        sx={{
          margin: "0 -16px",
          height: "430px",
          overflowY: "scroll",
          overflowX: "visible",
          scrollbarWidth: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {CHAT_LIST.map((chat) => (
          <Box height="84px" key={chat.name} padding="0 16px">
            <div
              onClick={() => handleBorrower({ name: chat.name, id: "3" })} // TODO 실제 채팅내역 가져오기
              style={{
                margin: "0 -16px",
                backgroundColor: chat.name === borrower.name ? "#E5E5E5" : "",
              }}
            >
              <ChatItem {...chat} />
            </div>
          </Box>
        ))}
      </Box>
      <Button
        disabled={notSelected}
        onClick={handleNext}
        variant="contained"
        fullWidth
        sx={{ m: "16px 0" }}
      >
        <Typography variant="h6">대여예약</Typography>
      </Button>
    </Stack>
  );
};

export default ChatList;
