// 외부모듈
import { createBrowserRouter, Outlet } from "react-router-dom";

// 내부모듈
import Header from "../components/layout/Header";
import Home from "../container/main/Home";
import App from "../App";

const loader = async () => {
  // 로더에서 msw를 사용할 수 없음..
  // const a = await axios.get("/products");
  return { res: [1] };
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <p>App!</p>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/home",
        loader,
        element: <Home />,
      },
      {
        path: "signIn",
        element: <div>signIn</div>,
      },
      {
        path: "signUp",
        element: <div>signUp</div>,
      },
    ],
  },
]);
