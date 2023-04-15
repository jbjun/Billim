import LoginPage from "@pages/login/LoginPage";
import NaverConnectionPage from "@pages/login/NaverConnectionPage";
import RegisterPage from "@pages/login/RegisterPage";
import RegistrationCompletedPage from "@pages/login/RegistrationCompletedPage";
import ServiceDescriptionPage from "@pages/login/ServiceDescriptionPage";

const LOGIN_PATH = "login";
const REGISTER_PATH = "register";
const NAVER_CONNECTION_PATH = "naver-connection";
const SERVICE_DESCRIPTION_PATH = "service-description";
const REGISTRATION_COMPLETED_PATH = "registration-completed";

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
    path: SERVICE_DESCRIPTION_PATH,
    element: <ServiceDescriptionPage />,
  },
  {
    path: REGISTRATION_COMPLETED_PATH,
    element: <RegistrationCompletedPage />,
  },
];

export default login_rotuer_info;
