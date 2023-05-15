import React, { useMemo, useState } from "react";
import ChattingList, { IChatInfo } from "@components/chat/ChattingList";
import { Dialog as MUIDialog, Grid, Typography, Button } from "@mui/material";
import ChattingEmptyBillimCharacter from "@assets/images/chatting/Chatting_empty_billim_character.png";
import { useNavigate } from "react-router";
import { CHAT_PATH } from "routes";
import BillimImage from "@components/common/BillimImage";
import {
  useChatList,
  useChatListMutationByRemove,
} from "@lib/hooks/query/chatQuery";
import { IChatListResponse } from "@lib/api/chatApi";
function ChattingListContainer() {
  const navigate = useNavigate();
  const chattingLists = useChatList();
  const chatListMutationByRemove = useChatListMutationByRemove();

  const sortedChattingListInDescendingOrder = useMemo(() => {
    return chattingLists
      .slice()
      .sort((a: IChatListResponse, b: IChatListResponse) => {
        return (
          new Date(b.lastMessageDate).getTime() -
          new Date(a.lastMessageDate).getTime()
        );
      });
  }, [chattingLists]);
  const onRemove = (chatId: string) => {
    const newChattingLists = chattingLists.filter((chat) => chat.id !== chatId);
    // mutation 처리
    chatListMutationByRemove.mutate(chatId);
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
          chattingLists={sortedChattingListInDescendingOrder}
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
      <BillimImage src={ChattingEmptyBillimCharacter} />
      <Typography textAlign={"center"} color={"grey"}>
        아직 채팅이 없어요. <br /> 빌림 회원들과 채팅을 진행해보세요.
      </Typography>
    </>
  );
}
