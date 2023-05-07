// 외부모듈
import { Box, Container, Grid, useTheme, Skeleton } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";

// 내부모듈
import ProductCard from "@components/home/ProductCard";
import Banner from "@components/home/Banner";
import ProductFilterContainer from "@container/home/ProductFilterContainer";
import Header from "@components/layout/Header";
import HeaderLocationTitle from "@components/home/HeaderLocationTitle";
import HeaderHomeMenu from "@components/home/HeaderHomeMenu";
import { useInfiniteProducts } from "@lib/hooks/query/product";
import Empty from "@components/common/Empty";

export type OrderbyType = "recent" | "priceAsc" | "priceDesc";

export type FilterOptionType =
  | "최근 등록순"
  | "대여료 낮은순"
  | "대여료 높은순";

export interface IOrderby {
  text: FilterOptionType;
  value: OrderbyType;
}

const HomePageContainer = () => {
  const navigate = useNavigate();
  const [orderby, setOrderby] = useState<IOrderby>({
    text: "최근 등록순",
    value: "recent",
  });
  const theme = useTheme();
  const { data, isFetchingNextPage, isLoading, refetch } = useInfiniteProducts({
    location: "자양동",
    orderBy: orderby.value,
  });
  const pages = data?.pages;

  const handleClick = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  const handleOrderby = (orderby: IOrderby) => {
    setOrderby(orderby);
  };

  return (
    <>
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
            <ProductFilterContainer
              orderby={orderby}
              handleOrderby={handleOrderby}
            />
          </Grid>
          {pages?.map((page) =>
            page.map((product) => (
              <Grid item xs={6} maxWidth="44vw" key={product.id}>
                <div onClick={(e) => handleClick(e, product.id)}>
                  <ProductCard {...product} />
                </div>
              </Grid>
            ))
          )}
          {(isFetchingNextPage || isLoading) &&
            Array.from({ length: 10 }).map((_, index) => (
              <Grid
                item
                xs={6}
                maxWidth="44vw"
                height="260px"
                key={`skeleton-${index}`}
              >
                <Skeleton animation="wave" variant="rectangular" height={200} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePageContainer;
