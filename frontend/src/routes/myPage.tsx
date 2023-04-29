import FAQPage from "@pages/mypage/FAQPage";
import MyInformationSettingPage from "@pages/mypage/MyInformationSettingPage";
import NoticePage from "@pages/mypage/NoticePage";

const NOTICE_PATH = "notice";
const FAQ_PATH = "faq";
const My_INFORMATION_SETTING_PATH = "my_info_setting";

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
];

export default mypage_rotuer_info;
