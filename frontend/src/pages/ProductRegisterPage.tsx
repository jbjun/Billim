// 내부모듈
import Header from "@components/layout/Header";
import ProductRegisterContainer from "@container/home/ProductRegisterContainer";
import useGoBack from "@lib/hooks/useGoBack";

const ProductRegisterPage = () => {
  return (
    <>
      <Header title="상품등록" needBackHistory></Header>
      <ProductRegisterContainer />
    </>
  );
};

export default ProductRegisterPage;
