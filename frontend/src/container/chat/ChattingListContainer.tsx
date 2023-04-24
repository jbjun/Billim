import React, { useState } from "react";
import ChattingList, { IChatInfo } from "@components/chat/ChattingList";
import { Dialog as MUIDialog, Grid, Typography, Button } from "@mui/material";
import ChattingEmptyBillimCharacter from "@assets/images/chatting/Chatting_empty_billim_character.png";
import { useNavigate } from "react-router";
import { CHAT_PATH } from "routes";
function ChattingListContainer() {
  const navigate = useNavigate();
  const [chattingLists, setChattingLists] = useState<IChatInfo[]>([
    {
      id: "1",
      userName: "김빌리",
      productName: "가정용 해머드릴 키트",
      time: "14:21",
      messagePreview: "안녕하세요 빌리진님 해머드릴 키트에 관심이 있는..",
    },
  ]);

  const onRemove = (chatId: string) => {
    const newChattingLists = chattingLists.filter((chat) => chat.id !== chatId);
    setChattingLists(newChattingLists);
  };

  const onMoveChat = (chatId: string) => {
    navigate(`/${CHAT_PATH}/${chatId}`);
  };

  return (
    <>
      {chattingLists.length > 0 ? (
        <ChattingList
          onMoveChat={onMoveChat}
          onRemove={onRemove}
          chattingLists={chattingLists}
        />
      ) : (
        <EmptyChatting />
      )}
    </>
  );
}

export default ChattingListContainer;

function EmptyChatting() {
  return (
    <>
      <img
        style={{ width: "300px", height: "300px" }}
        src={ChattingEmptyBillimCharacter}
      />
      <Typography textAlign={"center"} color={"grey"}>
        아직 채팅이 없어요. <br /> 빌림 회원들과 채팅을 진행해보세요.
      </Typography>
    </>
  );
}
