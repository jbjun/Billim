import axios from "axios";
import { BASE_API_PATH, getId } from ".";

export interface IChatListResponse {
  id: string;
  lastMessage: string;
  lastMessageDate: string; //"yyyy-MM-dd HH:mm:ss";
  productName: string;
  traderName: string;
}
export const fetchChatRoomList = async () => {
  const result = await axios.get(`${BASE_API_PATH}/api/v1/chatRoomList`);

  return result.data;
};

export const fetchChatRoom = async (chatId: string) => {
  const result = await axios.get(
    `${BASE_API_PATH}/api/v1/chatRoomList/${chatId}`
  );
  return result.data;
};

export const removeChatById = async (chatId: string) => {};
