import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {
  Box,
  Button,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import Carousel from "@components/home/productDetail/Carousel";
import Header from "@components/layout/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import CloseIcon from "@mui/icons-material/Close";
import { LOGIN_PATH } from "@routes/login";
import { HOME_PATH } from "@routes/index";
import Guide1 from "@assets/images/guide/Guide_1.png";
import Guide2 from "@assets/images/guide/Guide_2.png";
import Guide3 from "@assets/images/guide/Guide_3.png";
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

const images = [Guide1, Guide2, Guide3];
function GuidePage() {
  const navigate = useNavigate();

  const onMoveLogin = () => {
    navigate(`${HOME_PATH}`);
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
                  customPagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '"></span>';
                    },
                  }}
                >
                  <GuideOne />
                  <GuideTwo />
                  <GuideThree />
                </Carousel>
              </WrapperStyle>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default GuidePage;

function GuideOne() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ p: 2 }}>
          내 주변에서 빌릴 수 있는 상품을
          <br /> 간편하게 확인해 보세요!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
          src={Guide1}
        />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
function GuideTwo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ p: 2 }}>
          원하는 물품 대여 예약을
          <br /> 채팅을 통해 쉽고 간편하게 해보세요!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
          src={Guide2}
        />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
function GuideThree() {
  const navigate = useNavigate();

  const onMoveLogin = () => {
    navigate(`${HOME_PATH}`);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ p: 2 }}>
          원하는 물품을 빌림을 통해
          <br /> 간편하게 빌려보세요
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
          src={Guide3}
        />
      </Grid>
      <Grid item xs={12} sx={{ m: 2 }}>
        {" "}
        <Button
          variant="contained"
          sx={{ color: "white", backgroundColor: "black", width: "100%" }}
          onClick={onMoveLogin}
        >
          빌림 시작하기
        </Button>
      </Grid>
    </Grid>
  );
}
