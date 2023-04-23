import CategoryPage from "@pages/login/CategoryPage";
import LoginPage from "@pages/login/LoginPage";
import NaverConnectionPage from "@pages/login/NaverConnectionPage";
import RegisterPage from "@pages/login/RegisterPage";
import RegistrationCompletedPage from "@pages/login/RegistrationCompletedPage";

const LOGIN_PATH = "login";
const REGISTER_PATH = "register";
const NAVER_CONNECTION_PATH = "naver-connection";
export const SERVICE_DESCRIPTION_PATH = "service-description";
const SERVICE_DESCRIPTION_DYNAMIC_PATH = "/:descriptionType";
const REGISTRATION_COMPLETED_PATH = "registration-completed";
const CATEGORY_PATH = "category";

const login_rotuer_info = [
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
  {
    path: REGISTER_PATH,
    element: <RegisterPage />,
  },
  {
    path: NAVER_CONNECTION_PATH,
    element: <NaverConnectionPage />,
  },
  {
    path: REGISTRATION_COMPLETED_PATH,
    element: <RegistrationCompletedPage />,
  },
  {
    path: CATEGORY_PATH,
    element: <CategoryPage />,
  },
];

export default login_rotuer_info;
