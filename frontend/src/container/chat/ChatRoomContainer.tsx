import ChatRoom, { IMessage } from "@components/chat/ChatRoom";
import React, { useState } from "react";

function ChatRoomContainer() {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      owner: "another",
      message:
        "안녕하세요 빌리진님 해머드릴 키드에 관심이.... asdfljsdflkjasldfj sdfjasldfjlasdfjlsdjflasdkj",
      timestamp: "14:21",
    },
    {
      owner: "self",
      message:
        "안녕하세요 빌리진님 해머드릴 키드에 관심이.... asdfljsdflkjasldfj sdfjasldfjlasdfjlsdjflasdkj",
      timestamp: "14:22",
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const onChange = (e: any) => {
    const value = e.target.value;
    setInputMessage(value);
  };

  const onSendMessage = () => {
    const newMessages = messages.concat({
      owner: "self",
      message: inputMessage,
      timestamp: "00:00",
    });
    setMessages(newMessages);
  };
  return (
    <ChatRoom
      messages={messages}
      inputMessage={inputMessage}
      onChangeInputMessage={onChange}
      onSendMessage={onSendMessage}
    />
  );
}

export default ChatRoomContainer;
