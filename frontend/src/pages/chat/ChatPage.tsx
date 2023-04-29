// 내부모듈
import Header from "@components/layout/Header";

import useGoBack from "@lib/hooks/useGoBack";
import { useParams } from "react-router";
import ChatRoomContainer from "@container/chat/ChatRoomContainer";
const ChatPage = () => {
  const params = useParams();
  return (
    <>
      <Header title="김빌리" needBackHistory />
      <ChatRoomContainer />
    </>
  );
};

export default ChatPage;
