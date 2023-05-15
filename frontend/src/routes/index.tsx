/* eslint-disable prettier/prettier */
// 외부모듈
import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

// 내부모듈
import App from "../App";
import HomePage from "@pages/HomePage";
import BorrowAndLendPage from "@pages/BorrowAndLendPage";
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
import GuidePage from "@pages/GuidePage";
import IntroPage from "@pages/IntroPage";

export const ROOT_PATH = "/";

export const INTRO_PATH = "intro";

// guide
export const GUIDE_PATH = "guide";

// chat
export const CHAT_LIST_PATH = "chat-list";
export const CHAT_PATH = "chat";
export const CHAT_DYNAMIC_PATH = "/:chatId";

// home
export const HOME_PATH = "/home";
export const CATEGORY_PATH = "/category";
export const CATEGORY_HOEM_PATH = "/:category/home";

// rental history
export const BRROW_AND_LEND_PATH = "/borrowAndLend";

// my
export const MY_PATH = "/my";

export const TERMS_PATH = "/terms/:term";

export const router = createBrowserRouter([
  {
    path: ROOT_PATH,
    index: true,
    element: <App />,
  },
  {
    path: INTRO_PATH,
    element: <IntroPage />,
  },
  {
    path: GUIDE_PATH,
    element: <GuidePage />,
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
        path: BRROW_AND_LEND_PATH,
        element: <BorrowAndLendPage />,
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
    path: "product/:id",
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
