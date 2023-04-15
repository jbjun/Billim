/* eslint-disable prettier/prettier */
// 외부모듈
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router";

// 내부모듈
import App from "../App";
import HomePage from "@pages/HomePage";
import RentalListPage from "@pages/RentalListPage";
import ChattingPage from "@pages/ChattingPage";
import MyPage from "@pages/MyPage";
import LabelBottomNavigation from "@container/MainBottomNavigationContainer";
import ProductDetailPage from "@pages/ProductDetailPage";
import ProductRegisterPage from "@pages/ProductRegisterPage";
import login_rotuer_info from "./login";

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
    path: "product/register",
    element: <ProductRegisterPage />,
  },
  {
    path: "product/:productId",
    element: <ProductDetailPage />,
  },
  /*
    login
  */
  ...login_rotuer_info,
]);
