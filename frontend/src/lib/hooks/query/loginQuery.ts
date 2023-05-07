import {
  IUpdateUserProps,
  IUserInfoResponse,
  fetchUserInfo,
  updateUserInfo,
} from "@lib/api/loginApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useUserInfo(): IUserInfoResponse | undefined {
  const { data } = useQuery(["userinfo"], async () => {
    const data = await fetchUserInfo();
    return data;
  });
  return data;
}

export function useUserInfoMutationByUpdate() {
  const queryClient = useQueryClient();
  return useMutation(
    (userInfo: IUpdateUserProps) => {
      return updateUserInfo(userInfo);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["userinfo"]),
    }
  );
}
