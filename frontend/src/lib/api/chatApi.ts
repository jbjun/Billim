import axios from "axios";
import { BASE_API_PATH, BASE_URL, getId } from ".";

export interface IChatListResponse {
  id: string;
  lastMessage: string;
  lastMessageDate: string; //"yyyy-MM-dd HH:mm:ss";
  productName: string;
  traderName: string;
  // image 경로
  imageName?: string;
}
export const fetchChatRoomList = async () => {
  const result = await axios.get(`${BASE_URL}/api/v1/chatRoomList`, {
    withCredentials: true,
  });

  return result.data;
};

export const fetchChatRoom = async (chatId: string) => {
  const result = await axios.get(`${BASE_URL}/api/v1/chatRoomList/${chatId}`, {
    withCredentials: true,
  });
  return result.data;
};
export const createChatRoom = async (productId: string) => {
  const result = await axios.post(
    `${BASE_URL}/api/v1/createChatroom?productId=${productId}`,
    {},
    { withCredentials: true }
  );
  return result.data;
};

export const removeChatById = async (chatId: string) => {};
