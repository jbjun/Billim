// 외부모듈
import { Box } from "@mui/material";

// 내부모듈
import Header from "@components/layout/Header";
import ProductDetailContainer from "@container/home/productDetail/ProductDetailContainer";
import DetailMenuContainer from "@container/home/productDetail/DetailMenuContainer";

const ProductDetailPage = () => {
  return (
    <>
      <Header
        title="상품정보"
        needBackHistory
        adornment={
          <Box display="flex" justifyContent="space-around">
            {/* <ShareContainer /> */}
            <DetailMenuContainer />
          </Box>
        }
      />
      <ProductDetailContainer />
    </>
  );
};

export default ProductDetailPage;
