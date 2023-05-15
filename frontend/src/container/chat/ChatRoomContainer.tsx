import ChatRoom, { IMessage } from "@components/chat/ChatRoom";
import { useChatRoom } from "@lib/hooks/query/chatQuery";
import useChat from "@lib/hooks/useChat";
import React, { useState } from "react";

interface IChatRoomContainerProps {
  chatId: string | undefined;
}
function ChatRoomContainer({ chatId }: IChatRoomContainerProps) {
  const { messages, onSendMessage } = useChat({
    roomId: chatId as string,
    initMessages: [
      // {
      //   owner: "another",
      //   message: "안녕하세요 빌리진님 해머드릴 키드에 관심이....",
      //   timestamp: "2023-04-07 18:26:04",
      // },
      // {
      //   owner: "self",
      //   message:
      //     "안녕하세요 빌리진님 해머드릴 키드에 관심이.... asdfljsdflkjasldfj sdfjasldfjlasdfjlsdjflasdkj",
      //   timestamp: "2023-04-08 18:26:04",
      // },
    ],
  });

  const [inputMessage, setInputMessage] = useState<string>("");

  const onChange = (e: any) => {
    const value = e.target.value;
    setInputMessage(value);
  };

  const onSend = () => {
    onSendMessage(inputMessage);
    setInputMessage("");
  };
  return (
    <ChatRoom
      messages={messages}
      inputMessage={inputMessage}
      onChangeInputMessage={onChange}
      onSendMessage={onSend}
    />
  );
}

export default ChatRoomContainer;
