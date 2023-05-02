import {
  IChatListResponse,
  fetchChatRoom,
  fetchChatRoomList,
  removeChatById,
} from "@lib/api/chatApi";
import { fetchUserInfo } from "@lib/api/loginApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useChatList(): IChatListResponse[] {
  const { data } = useQuery(["chatlist"], async () => {
    const {
      data: { body, statusCode },
    } = await fetchChatRoomList();
    return body.chatlist;
  });

  if (!data) {
    return [];
  }

  return data as IChatListResponse[];
}

export function useChatListMutationByRemove() {
  const queryClient = useQueryClient();
  return useMutation(
    (chatId: string) => {
      return removeChatById(chatId);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["chatlist"]),
    }
  );
}

export function useChatRoom(chatId: string): any[] {
  const { data } = useQuery(["chatroom", chatId], async () => {
    const {
      data: { body, statusCode },
    } = await fetchChatRoom(chatId);
    return body.messages;
  });

  if (!data) {
    return [];
  }

  return data;
}
