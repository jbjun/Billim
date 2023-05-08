import FAQPage from "@pages/mypage/FAQPage";
import MyInformationSettingPage from "@pages/mypage/MyInformationSettingPage";
import NoticePage from "@pages/mypage/NoticePage";
import UserSettingPage from "@pages/mypage/UserSettingPage";

export const NOTICE_PATH = "notice";
export const FAQ_PATH = "faq";
export const My_INFORMATION_SETTING_PATH = "my-info-setting";
export const USER_SETTING_PATH = "my-user-setting";

const mypage_rotuer_info = [
  {
    path: NOTICE_PATH,
    element: <NoticePage />,
  },
  {
    path: FAQ_PATH,
    element: <FAQPage />,
  },
  {
    path: My_INFORMATION_SETTING_PATH,
    element: <MyInformationSettingPage />,
  },
  {
    path: USER_SETTING_PATH,
    element: <UserSettingPage />,
  },
];

export default mypage_rotuer_info;
