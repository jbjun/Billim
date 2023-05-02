import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import RegisterPage from "@pages/login/RegisterPage";
import HomePage from "@pages/HomePage";
import ProductDetailPage from "@pages/ProductDetailPage";
import { useNavigate } from "react-router";

function App() {
  const navigator = useNavigate();
  return (
    <div>
      App!
      <button onClick={() => navigator("/login")}>로그인페이지</button>
      <button onClick={() => navigator("/register")}>회원가입페이지</button>
      <button onClick={() => navigator("/home")}>홈페이지</button>
    </div>
  );
}

export default App;
