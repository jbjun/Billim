// 외부모듈
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";

// 내부모듈
import Header from "@components/layout/Header";
import Carousel from "@components/home/productDetail/Carousel";
import ProductDetailContainer from "@container/home/productDetail/ProductDetailContainer";
import ReservationDialogContainer from "@container/home/productDetail/ReservationDialogContainer"; 

const LIST = ["a", "b", "c"];

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const handleOpen = () => setIsOpenReservation(true);
  const handleClose = () => setIsOpenReservation(false);

  return (
    <>
      <Header title="상품정보" onBackHistory={() => navigate(-1)} />
      {isOpenReservation && (
        <ReservationDialogContainer
          open={isOpenReservation}
          onClose={handleClose}
        />
      )}
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
      <ProductDetailContainer onClick={handleOpen} />
    </>
  );
};

export default ProductDetailPage;
