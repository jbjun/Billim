// 내부모듈
import Header from "@components/layout/Header";
import ProductRegisterContainer from "@container/home/ProductRegisterContainer";
import useGoBack from "@lib/hooks/useGoBack";

const ProductRegisterPage = () => {
  const handleGoBack = useGoBack();
  return (
    <>
      <Header title="상품등록" onBackHistory={handleGoBack}></Header>
      <ProductRegisterContainer />
    </>
  );
};

export default ProductRegisterPage;
