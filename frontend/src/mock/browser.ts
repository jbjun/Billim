import { setupWorker } from "msw";
import { handlers } from "./handlers";

const worker = setupWorker(...handlers);

// dev 환경에서 데이터를 모킹 합니다.
(() => {
  if (import.meta.env.DEV) {
    worker.start({ onUnhandledRequest: "bypass" });
  }
})();
