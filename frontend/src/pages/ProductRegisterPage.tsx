// 외부모듈
import { useNavigate } from "react-router";

// 내부모듈
import Header from "@components/layout/Header";
import ProductRegisterContainer from "@container/home/ProductRegisterContainer";

const ProductRegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="상품등록" onBackHistory={() => navigate(-1)}></Header>
      <ProductRegisterContainer />
    </>
  );
};

export default ProductRegisterPage;
