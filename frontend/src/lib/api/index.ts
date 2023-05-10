import axios from "axios";
export const BASE_URL = "http://44.203.121.190:8080";
// proxy 설정 시 타겟으로 지정할 path vite.config.ts
export const BASE_API_PATH = "/api";
export const BASE_SOKET_IO_PATH = "/socket.io";
export const setHeaderAuthorization = (sessionKey: string) => {
  if (!sessionKey) return;
  axios.defaults.headers.common["sessionKey"] = sessionKey;
};

// 임시 처리
export function getId() {
  const id = 16; // 임시처리 / getCookie('sessionKey')
  return id;
}
