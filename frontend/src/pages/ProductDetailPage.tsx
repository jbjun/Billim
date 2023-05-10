// 외부모듈
import { Box } from "@mui/material";
import { useState } from "react";

// 내부모듈
import Header from "@components/layout/Header";
import ProductDetailContainer from "@container/home/productDetail/ProductDetailContainer";
import ReservationDialogContainer from "@container/home/productDetail/ReservationDialogContainer";
import DetailMenuContainer from "@container/home/productDetail/DetailMenuContainer";

const ProductDetailPage = () => {
  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const handleOpen = () => setIsOpenReservation(true);
  const handleClose = () => setIsOpenReservation(false);

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
      <ReservationDialogContainer
        open={isOpenReservation}
        onClose={handleClose}
      />
      <ProductDetailContainer onClick={handleOpen} />
    </>
  );
};

export default ProductDetailPage;
