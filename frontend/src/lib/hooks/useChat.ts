import { BASE_SOKET_IO_PATH, BASE_URL, getId } from "@lib/api";
import React, { useCallback, useEffect, useRef, useState } from "react";

const { SockJS, Stomp } = window as any;
interface IUseChatProps {
  roomId: string;
  initMessages: any;
}
function useChat({ initMessages, roomId }: IUseChatProps) {
  const stomp = useRef<null | any>(null);
  const [messages, setMessages] = useState<any>(initMessages);
  const userId = getId();

  if (stomp.current === null) {
    const sockJs = new SockJS(`${BASE_URL}/stomp/chat`);
    stomp.current = Stomp.over(sockJs);
  }

  const onSendMessage = useCallback(
    (value: string) => {
      stomp.current.send(
        `/pub/chat/message`,
        {},
        JSON.stringify({ roomId: roomId, userId: userId, message: value })
      );
    },
    [stomp]
  );

  useEffect(() => {
    //2. connection이 맺어지면 실행
    stomp.current.connect({}, function () {
      console.log("STOMP Connection");

      //4. subscribe(path, callback)으로 메세지를 받을 수 있음
      stomp.current.subscribe(`/sub/chat/room/` + roomId, function (chat: any) {
        const {
          message,
          createdDate,
          userId: senderUserId,
        } = JSON.parse(chat.body);
        const owner = String(senderUserId) === userId ? "self" : "another";

        setMessages((messages: any) =>
          messages.concat({ owner, message, timestamp: createdDate })
        );
      });
    });

    return () => {
      //   stomp.disconnect();
    };
  }, [stomp]);

  return {
    messages,
    onSendMessage,
  };
}

export default useChat;
