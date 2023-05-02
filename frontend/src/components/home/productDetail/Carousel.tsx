/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import React, { ReactNode } from "react";
import { styled, useTheme } from "@mui/material";

type CarouselProps = {
  children: ReactNode;
};

const WrapperStyle = styled("div")(() => ({
  width: "100%",
  height: "100%",
  "& .swiper": {
    width: "100%",
    height: "100%",
  },
  "& .swiper-pagination-progressbar": {
    backgroundColor: "#F3F7FA",
  },
  "& div.swiper-pagination-progressbar": {
    bottom: "0 !important",
    top: "calc(100% - 4px)",
  },
}));

const Carousel = ({ children }: CarouselProps) => {
  const theme = useTheme();
  return (
    <WrapperStyle>
      <Swiper
        style={{
          //@ts-ignore
          "--swiper-theme-color": theme.palette.primary[200],
        }}
        modules={[Pagination]}
        pagination={{
          type: "progressbar",
          renderProgressbar: (progressbarFillClass) =>
            '<span class="' + progressbarFillClass + '"></span>',
        }}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </WrapperStyle>
  );
};

export default Carousel;
