import {
  IChatListResponse,
  createChatRoom,
  fetchChatRoom,
  fetchChatRoomList,
  removeChatById,
} from "@lib/api/chatApi";
import { fetchUserInfo } from "@lib/api/userApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useChatList(): IChatListResponse[] {
  const { data } = useQuery(["chatlist"], async () => {
    const data = await fetchChatRoomList();
    return data;
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

export function useChatListMutationByCreate() {
  const queryClient = useQueryClient();
  return useMutation(
    (productId: string) => {
      return createChatRoom(productId);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["chatlist"]),
    }
  );
}

export function useChatRoom(chatId: string): any[] {
  const { data } = useQuery(["chatroom", chatId], async () => {
    const data = await fetchChatRoom(chatId);
    return data;
  });

  if (!data) {
    return [];
  }

  return data;
}
