/* eslint-disable prettier/prettier */
// 외부모듈
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router";

// 내부모듈
import App from "../App";
import HomePage from "@pages/HomePage";
import RentalListPage from "@pages/RentalListPage";
import ChatListPage from "@pages/chat/ChatListPage";
import MyPage from "@pages/MyPage";
import LabelBottomNavigation from "@container/MainBottomNavigationContainer";
import ProductDetailPage from "@pages/ProductDetailPage";
import ProductRegisterPage from "@pages/ProductRegisterPage";
import login_rotuer_info from "./login";
import ChatPage from "@pages/chat/ChatPage";

export const CHAT_LIST_PATH = "chat-list";
export const CHAT_PATH = "chat";
export const CHAT_DYNAMIC_PATH = "/:chatId";

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
        path: CHAT_LIST_PATH,
        element: <ChatListPage />,
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

  /*
    chat
  */
  {
    path: CHAT_PATH + CHAT_DYNAMIC_PATH,
    element: <ChatPage />,
  },
]);
