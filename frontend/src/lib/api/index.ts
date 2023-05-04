import axios from "axios";
export const BASE_URL = "http://44.203.121.190:8080/api";
// proxy 설정 시 타겟으로 지정할 path vite.config.ts
export const BASE_API_PATH = "/api";
export const setHeaderAuthorization = (sessionKey: string) => {
  if (!sessionKey) return;
  axios.defaults.headers.common["sessionKey"] = sessionKey;
};
