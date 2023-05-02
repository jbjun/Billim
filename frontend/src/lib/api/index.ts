import axios from "axios";
export const BASE_URL = "http://localhost:8080/api";
// axios.defaults.withCredentials = true;

export const setHeaderAuthorization = (sessionKey: string) => {
  if (!sessionKey) return;
  axios.defaults.headers.common["sessionKey"] = sessionKey;
};
