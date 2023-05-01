import { fetchUserInfo } from "@lib/api/loginApi";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useUserInfo():
  | {
      username: string;
      email: string;
      phoneNumber?: string;
      address?: string;
      nickName?: string;
    }
  | undefined {
  const { data } = useQuery(["userinfo"], async () => {
    const {
      data: { body, statusCode },
    } = await fetchUserInfo();
    return body;
  });
  return data;
}
