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
import AuthorizedPage from "@pages/AuthorizedPage";

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
        element: (
          <AuthorizedPage>
            <HomePage />
          </AuthorizedPage>
        ),
      },
      {
        path: BRROW_AND_LEND_PATH,
        element: <BorrowAndLendPage />,
      },
      {
        path: CHAT_LIST_PATH,
        element: (
          <AuthorizedPage>
            <ChatListPage />
          </AuthorizedPage>
        ),
      },
      {
        path: MY_PATH,
        element: (
          <AuthorizedPage>
            <MyPage />
          </AuthorizedPage>
        ),
      },
    ],
  },
  {
    path: TERMS_PATH,
    element: (
      <AuthorizedPage>
        <TermsPage />
      </AuthorizedPage>
    ),
  },
  {
    path: CATEGORY_PATH,
    element: (
      <AuthorizedPage>
        <CategoryPage />
      </AuthorizedPage>
    ),
  },
  {
    path: CATEGORY_HOEM_PATH,
    element: (
      <AuthorizedPage>
        <CategoryHomePage />
      </AuthorizedPage>
    ),
  },
  {
    path: "product/register",
    element: (
      <AuthorizedPage>
        <ProductRegisterPage />
      </AuthorizedPage>
    ),
  },
  {
    path: "product/:id",
    element: (
      <AuthorizedPage>
        <ProductDetailPage />
      </AuthorizedPage>
    ),
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
    element: (
      <AuthorizedPage>
        <ChatPage />
      </AuthorizedPage>
    ),
  },

  /**
   * mypage
   *
   */
  ...mypage_rotuer_info,
]);
