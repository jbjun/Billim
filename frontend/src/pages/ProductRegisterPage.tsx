// 내부모듈
import Header from "@components/layout/Header";
import ProductRegisterContainer from "@container/home/register";

const ProductRegisterPage = () => {
  return (
    <>
      <Header title="상품등록" needBackHistory></Header>
      <ProductRegisterContainer />
    </>
  );
};

export default ProductRegisterPage;
