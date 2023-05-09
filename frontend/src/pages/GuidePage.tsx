import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box, Button, Grid, IconButton, styled } from "@mui/material";
import Carousel from "@components/home/productDetail/Carousel";
import Header from "@components/layout/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import { LOGIN_PATH } from "@routes/login";
import { HOME_PATH } from "@routes/index";
const WrapperStyle = styled("div")(() => ({
  width: "100%",
  height: "100%",
  "& .swiper": {
    width: "100%",
    height: "100%",
  },
  "& .swiper-pagination-bullet": {
    backgroundColor: "grey",
  },
  "& .swiper-pagination-bullet-active": {
    borderRadius: "15%",
    width: "24px",
  },
}));

const images = [
  "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg",
  "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg",
];
function GuidePage() {
  const navigate = useNavigate();
  const [showNavigator, setShowNavigator] = useState(false);
  const lastImageIndex = images.length - 1;

  const onMoveLogin = () => {
    navigate(`/${HOME_PATH}`);
  };
  const onActiveCarouselIndex = (index: number) => {
    setShowNavigator(lastImageIndex === index);
  };
  return (
    <>
      <Grid container direction={"column"} sx={{ height: "100%" }}>
        <Grid item sx={{ p: 1 }} xs={1}>
          <Grid container justifyContent={"flex-end"} alignItems={"center"}>
            <Grid item>
              <IconButton onClick={onMoveLogin}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: "100%" }}
          >
            <Box sx={{ width: "100vw", height: "100%", overflow: "hidden" }}>
              <WrapperStyle>
                <Carousel
                  onActiveIndex={onActiveCarouselIndex}
                  customPagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '"></span>';
                    },
                  }}
                >
                  {[
                    "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg",
                    "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg",
                  ].map((url, i) => {
                    return (
                      <img
                        key={i}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                        }}
                        src={url}
                      />
                    );
                  })}
                </Carousel>
              </WrapperStyle>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid item>
              {showNavigator && (
                <Button
                  variant="contained"
                  sx={{ color: "white", backgroundColor: "black" }}
                  onClick={onMoveLogin}
                >
                  빌림 시작하기
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default GuidePage;
