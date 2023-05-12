import axios from "axios";
import { getCookie } from "./cookie";
export const BASE_URL = "http://44.203.121.190:8080";
// proxy 설정 시 타겟으로 지정할 path vite.config.ts
export const BASE_API_PATH = "http://44.203.121.190:8080";
export const BASE_SOKET_IO_PATH = "/socket.io";
export const setHeaderAuthorization = (sessionKey: string) => {
  if (!sessionKey) return;
  axios.defaults.headers.common["sessionKey"] = sessionKey;
};

// 임시 처리
export function getId() {
  const id = getCookie("userId");
  return id;
}
