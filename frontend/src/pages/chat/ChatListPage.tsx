// 내부모듈
import Header from "@components/layout/Header";
import styled from "@emotion/styled";

import ChattingListContainer from "@container/chat/ChattingListContainer";
// import SlidableListItem from "@components/SlidableListItem";
const ChatListPage = () => {
  return (
    <>
      <Header title="채팅" />
      <ChattingListContainer />
    </>
  );
};

export default ChatListPage;
