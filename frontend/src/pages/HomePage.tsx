// 내부모듈
import LabelBottomNavigation from "@components/layout/BottomNavigation";
import Header from "@components/layout/Header";
import FloatingActionButton from "@components/FloatingActionButton";
import HomePageContainer from "@container/home/HomePageContainer";

// TODO 라우터 정해지면 LabelBottomNavigation, page 수정
const HomePage = () => {
  return (
    <>
      <Header title="광진구 자양동" />
      <HomePageContainer />
      <FloatingActionButton text="상품등록" position="bottom-left" />
      <LabelBottomNavigation />
    </>
  );
};

export default HomePage;
