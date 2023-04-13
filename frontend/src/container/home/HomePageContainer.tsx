// 외부모듈
import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { MouseEvent } from "react";
import { useNavigate } from "react-router";

// 내부모듈
import BillimCharacter from "@assets/images/Billim_main.png";
import ProductCard from "@components/ProductCard";
import { ProductsType } from "@type/product";

const products: ProductsType = [
  {
    id: 1,
    address: "광진구자양동",
    title: "안녕하세요",
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
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };
  return (
    <>
      <Box
        sx={{ background: theme.palette.primary.main }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box p={2}>
          <Typography
            color={theme.palette.text.white}
            variant="h5"
            sx={{ mb: 1 }}
          >
            빌리진님, 안녕하세요👋
          </Typography>
          <Typography color={theme.palette.text.white} variant="h5">
            오늘은 무엇을 빌려볼까요?
          </Typography>
        </Box>
        <Box>
          <img src={BillimCharacter} alt="character" />
        </Box>
      </Box>
      <Container
        sx={{
          pb: "56px",
          overflow: "hidden",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          transform: "translateY(-25px)",
          borderRadius: "24px 24px 0px 0px",
          backgroundColor: "white",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <FormControl>
              <Select
                sx={{
                  height: "30px",
                  borderRadius: "60px",
                  mt: "18px",
                  mb: "13px",
                }}
                defaultValue={10}
              >
                <MenuItem value={10}>
                  <Typography variant="b5">최근 등록순</Typography>
                </MenuItem>
                <MenuItem value={20}>
                  <Typography variant="b5">가격순</Typography>
                </MenuItem>
                <MenuItem value={30}>
                  <Typography variant="b5">어쩌구저쩌구</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {products.map((product) => (
            <Grid item xs={6} maxWidth="166px" key={product.id}>
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
