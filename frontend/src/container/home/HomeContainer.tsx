// 외부모듈
import { Box, Container, Grid, useTheme } from "@mui/material";
import { MouseEvent } from "react";
import { useNavigate } from "react-router";

// 내부모듈
import ProductCard from "@components/home/ProductCard";
import { ProductsType } from "@type/product";
import Banner from "@components/home/Banner";
import ProductFilterContainer from "@container/home/ProductFilterContainer";
import Header from "@components/layout/Header";
import HeaderLocationTitle from "@components/home/HeaderLocationTitle";
import HeaderHomeMenu from "@components/home/HeaderHomeMenu";
import React from "react";

const products: ProductsType = [
  {
    id: 1,
    address: "광진구자양동",
    title: "안녕하세요안녕하세요안녕하세요",
    price: "12000",
    per: "day",
    status: "renting",
  },
  {
    id: 2,
    address: "광진구자양동",
    title: "가정용해머드릴키트",
    price: "12000",
    per: "day",
    status: "rentable",
  },
  {
    id: 3,
    address: "광진구자양동",
    title: "가정용해머드릴키트",
    price: "12000",
    per: "day",
    status: "rentable",
  },
  {
    id: 4,
    address: "광진구자양동",
    title: "가정용해머드릴키트",
    price: "12000",
    per: "day",
    status: "rentable",
  },
  {
    id: 5,
    address: "광진구자양동",
    title: "가정용해머드릴키트",
    price: "12000",
    per: "day",
    status: "rentable",
  },
  {
    id: 6,
    address: "광진구자양동",
    title: "가정용해머드릴키트",
    price: "12000",
    per: "day",
    status: "rentable",
  },
];

const HomePageContainer = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <>
      {/* <Box position="sticky" top="0" zIndex={2}> */}
      <Box>
        <Header
          color={theme.palette.primary.main}
          title={<HeaderLocationTitle />}
          adornment={<HeaderHomeMenu />}
        />
      </Box>
      <Banner />
      <Container
        sx={{
          zIndex: 1,
          pb: "56px",
          // overflow: "hidden",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          transform: "translateY(-25px)",
          borderRadius: "24px 24px 0px 0px",
          backgroundColor: "white",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid
            // position="sticky"
            // top="65px"
            item
            xs={12}
            display="flex"
            justifyContent="flex-end"
            bgcolor="#fff"
            mt="1px"
          >
            <ProductFilterContainer />
          </Grid>
          {products.map((product) => (
            <Grid item xs={6} maxWidth="44vw" key={product.id}>
              <div onClick={(e) => handleClick(e, product.id)}>
                <ProductCard {...product} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePageContainer;
