export interface IChatListResponse {
  id: string;
  lastMessage: string;
  lastMessageDate: string; //"yyyy-MM-dd HH:mm:ss";
  productName: string;
  traderName: string;
}
export const fetchChatRoomList = async () => {
  return {
    data: {
      body: {
        chatlist: [
          {
            id: "1",
            traderName: "김빌리",
            productName: "가정용 해머드릴 키트",
            lastMessageDate: "14:21",
            lastMessage: "안녕하세요 빌리진님 해머드릴 키트에 관심이 있는..",
          },
        ],
      },
      statusCode: 200,
    },
  };
};

export const fetchChatRoom = async (chatId: string) => {
  //http://localhost:8080/api/v1/chatRoom/1
  return {
    data: {
      body: {
        messages: [{}],
      },
      statusCode: 200,
    },
  };
};

export const removeChatById = async (chatId: string) => {};
