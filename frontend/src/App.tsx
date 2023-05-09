// 외부모듈
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";

// 내부모듈
import DesktopPage from "@pages/common/DesktopPage";

function App() {
  const navigator = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      {isMobile ? (
        <>
          <button onClick={() => navigator("/login")}>로그인페이지</button>
          <button onClick={() => navigator("/register")}>회원가입페이지</button>
          <button onClick={() => navigator("/home")}>홈페이지</button>
        </>
      ) : (
        <DesktopPage />
      )}
    </div>
  );
}

export default App;
