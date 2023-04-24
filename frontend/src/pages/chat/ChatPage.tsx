// 내부모듈
import Header from "@components/layout/Header";
import styled from "@emotion/styled";

import ChattingListContainer from "@container/chat/ChattingListContainer";
import useGoBack from "@lib/hooks/useGoBack";
import { useParams } from "react-router";
// import SlidableListItem from "@components/SlidableListItem";
const ChatPage = () => {
  const onBackHistory = useGoBack();
  const params = useParams();
  return (
    <>
      <Header title="김빌리" onBackHistory={onBackHistory} />
    </>
  );
};

export default ChatPage;
