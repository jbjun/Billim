/* eslint-disable prettier/prettier */
// 외부모듈
import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

// 내부모듈
import App from "../App";
import HomePage from "@pages/HomePage";
import RentalListPage from "@pages/RentalHistoryPage";
import ChatListPage from "@pages/chat/ChatListPage";
import MyPage from "@pages/mypage";
import LabelBottomNavigation from "@container/MainBottomNavigationContainer";
import ProductDetailPage from "@pages/ProductDetailPage";
import ProductRegisterPage from "@pages/ProductRegisterPage";
import login_rotuer_info from "./login";
import ChatPage from "@pages/chat/ChatPage";
import mypage_rotuer_info from "./myPage";
import CategoryPage from "@pages/CategoryPage";
import CategoryHomePage from "@pages/CategoryHomePage";
import TermsPage from "@pages/TermsPage";

export const ROOT_PATH = "/";

// chat
export const CHAT_LIST_PATH = "chat-list";
export const CHAT_PATH = "chat";
export const CHAT_DYNAMIC_PATH = "/:chatId";

// home
export const HOME_PATH = "/home";
export const CATEGORY_PATH = "/category";
export const CATEGORY_HOEM_PATH = "/:category/home";

// rental history
export const RENTAL_HISTORY_PATH = "/rentalHistory";

// my
export const MY_PATH = "/my";

export const TERMS_PATH = "/terms/:term";

export const router = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <App />,
  },
  {
    element: (
      <>
        <Outlet />
        <Box height="56px" />
        <LabelBottomNavigation />
      </>
    ),
    children: [
      {
        path: HOME_PATH,
        element: <HomePage />,
      },
      {
        path: RENTAL_HISTORY_PATH,
        element: <RentalListPage />,
      },
      {
        path: CHAT_LIST_PATH,
        element: <ChatListPage />,
      },
      {
        path: MY_PATH,
        element: <MyPage />,
      },
    ],
  },
  {
    path: TERMS_PATH,
    element: <TermsPage />,
  },
  {
    path: CATEGORY_PATH,
    element: <CategoryPage />,
  },
  { path: CATEGORY_HOEM_PATH, element: <CategoryHomePage /> },
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

  /**
   * mypage
   *
   */
  ...mypage_rotuer_info,
]);
