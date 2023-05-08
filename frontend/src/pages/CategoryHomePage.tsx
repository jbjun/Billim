// 외부모듈
import { useSearchParams } from "react-router-dom";

// 내부모듈
import Header from "@components/layout/Header";
import HomePageContainer from "@container/home/HomeContainer";

const CategoryHomePage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("label");
  return (
    <>
      <Header title={category} needBackHistory />
      <HomePageContainer category={category} />
    </>
  );
};

export default CategoryHomePage;
