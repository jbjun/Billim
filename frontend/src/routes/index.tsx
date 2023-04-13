// 외부모듈
import { createBrowserRouter } from "react-router-dom";

// 외부모듈
import App from "../App";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import RentalListPage from "@pages/RentalListPage";
import ChattingPage from "@pages/ChattingPage";
import MyPage from "@pages/MyPage";
import { Outlet } from "react-router";
import LabelBottomNavigation from "@container/MainBottomNavigationContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: (
      <>
        <Outlet />
        <LabelBottomNavigation />
      </>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "rentalList",
        element: <RentalListPage />,
      },
      {
        path: "chatting",
        element: <ChattingPage />,
      },
      {
        path: "my",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
