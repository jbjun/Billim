// 외부모듈
import { useNavigate } from "react-router";
import { Box, useTheme } from "@mui/material";

// 내부모듈
import FloatingActionButton from "@components/FloatingActionButton";
import HomePageContainer from "@container/home/HomeContainer";

// TODO 라우터 정해지면 LabelBottomNavigation, page 수정
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomePageContainer />
      <FloatingActionButton
        text="상품등록"
        position="bottom-left"
        onClick={() => navigate("/product/register")}
      />
    </>
  );
};

export default HomePage;
