/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import React, { ReactNode } from "react";
import { styled, useTheme } from "@mui/material";
import { PaginationOptions, Swiper as SwiperTypes } from "swiper/types";

type CarouselProps = {
  children: ReactNode;
  customPagination?: PaginationOptions;
  onActiveIndex?: (index: number) => void;
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

const Carousel = ({
  children,
  customPagination,
  onActiveIndex,
}: CarouselProps) => {
  const theme = useTheme();
  return (
    <WrapperStyle>
      <Swiper
        onActiveIndexChange={(swiper: SwiperTypes) => {
          onActiveIndex?.(swiper.activeIndex);
        }}
        style={{
          //@ts-ignore
          "--swiper-theme-color": theme.palette.primary[200],
        }}
        modules={[Pagination]}
        pagination={
          customPagination
            ? customPagination
            : {
                type: "progressbar",
                renderProgressbar: (progressbarFillClass) =>
                  '<span class="' + progressbarFillClass + '"></span>',
              }
        }
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </WrapperStyle>
  );
};

export default Carousel;
