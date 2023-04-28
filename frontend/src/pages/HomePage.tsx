// 외부모듈
import { useNavigate } from "react-router";

// 내부모듈
import Header from "@components/layout/Header";
import FloatingActionButton from "@components/FloatingActionButton";
import HomePageContainer from "@container/home/HomeContainer";

// TODO 라우터 정해지면 LabelBottomNavigation, page 수정
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title="광진구 자양동" />
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
