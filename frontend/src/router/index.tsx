// 외부모듈
import { createBrowserRouter, Outlet } from "react-router-dom";

// 내부모듈
import Header from "../components/layout/Header";
import Home from "../container/main/Home";
import App from "../App";
import { loader as homeLoader } from "../container/main/Home";

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
        loader: homeLoader,
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
