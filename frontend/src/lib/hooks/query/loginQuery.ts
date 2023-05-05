import { IUserInfoResponse, fetchUserInfo } from "@lib/api/loginApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useUserInfo(): IUserInfoResponse | undefined {
  const { data } = useQuery(["userinfo"], async () => {
    const data = await fetchUserInfo();
    return data;
  });
  return data;
}
