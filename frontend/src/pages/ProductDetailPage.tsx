// 외부모듈
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

// 내부모듈
import Header from "@components/layout/Header";
import Carousel from "@components/productDetail/Carousel";
import ProductDetailContainer from "@container/home/ProductDetailContainer";

const LIST = ["a", "b", "c"];

const ProductDetailPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header title="상품정보" onBackHistory={() => navigate(-1)} />
      <Box sx={{ width: "100vw", height: "375px", overflow: "hidden" }}>
        <Carousel>
          {LIST.map((_, i) => (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={i}
            />
          ))}
        </Carousel>
      </Box>
      <ProductDetailContainer />
    </>
  );
};

export default ProductDetailPage;
