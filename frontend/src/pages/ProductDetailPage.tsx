import { Box, Container } from "@mui/material";
import Header from "../components/layout/Header";
import Carousel from "../components/Carousel";

const LIST = ["a", "b", "c"];

const ProductDetailPage = () => {
  return (
    <>
      <Header title="상품정보" />
      <Box sx={{ width: "100vw", height: "375px", overflow: "hidden" }}>
        <Carousel>
          {LIST.map((item, i) => (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url('https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
              key={i}
            />
          ))}
        </Carousel>
      </Box>
      <Container></Container>
    </>
  );
};

export default ProductDetailPage;
