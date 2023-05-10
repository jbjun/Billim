import {
  IUpdateUserProps,
  IUserInfoResponse,
  fetchUserInfo,
  updateUserInfo,
} from "@lib/api/userApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useUserInfo(): IUserInfoResponse | undefined {
  const { data } = useQuery(["userinfo"], async () => {
    const data = await fetchUserInfo();
    initlizeDefaultUserInfo(data);
    return data;
  });
  return data;
}

function initlizeDefaultUserInfo(data: IUserInfoResponse) {
  if (!data.fullPath) {
    data.fullPath =
      "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg";
  }
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
