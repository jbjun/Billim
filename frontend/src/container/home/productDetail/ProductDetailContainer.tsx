// 외부모듈
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocation } from "react-router";

// 내부모듈
import RentalStatusTag from "@components/common/RentStatusTag";
import { ReactComponent as ViewIcon } from "@assets/icons/View_icon.svg";
import { useGetProduct, useUpdateViewCount } from "@lib/hooks/query/product";
import Carousel from "@components/home/productDetail/Carousel";
import { useEffect } from "react";
import DetailSkeletonUI from "@components/home/productDetail/DetailSkeletonUI";

type ProductDetailContainer = {
  onClick?: () => void;
};

const ProductDetailContainer = ({ onClick }: ProductDetailContainer) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();

  if (!id) return null;
  const { mutate: updateViewCount } = useUpdateViewCount(id);

  useEffect(() => {
    if (id) updateViewCount();
  }, []);

  const { data, isLoading } = useGetProduct(id);

  if (isLoading || !data) return <DetailSkeletonUI />;

  const {
    title,
    text,
    viewCount,
    images,
    category,
    price,
    status,
    nickName,
    location,
  } = data;

  return (
    <>
      <Box sx={{ width: "100vw", height: "375px", overflow: "hidden" }}>
        <Carousel>
          {images.map((url, i) => (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url('${url}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={i}
            />
          ))}
        </Carousel>
      </Box>
      <Container sx={{ pt: "20px" }}>
        <Stack spacing={2.5} pb="72px">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: "36px", height: "36px" }} />
            <Box sx={{ ml: "8px" }}>
              <Typography variant="h7" lineHeight="17px">
                {nickName}
              </Typography>
              <Typography
                color="#000000"
                variant="b7"
                component="div"
                lineHeight="14px"
              >
                {location}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ float: "left" }} mr="4px">
              <RentalStatusTag status={status} bold />
            </Box>
            <Typography variant="h6" lineHeight="19px">
              {title}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              color={theme.palette.text.gray700}
              mt="8px"
            >
              <Typography variant="b5" mr="8px">
                {category}
              </Typography>
              <ViewIcon />
              <Typography variant="b5" ml="2px">
                {viewCount}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="h6" mr="4px">
              {`${price.toLocaleString()} 원`}
            </Typography>
            <Typography variant="b4"> /일</Typography>
          </Box>
          <Divider />
          <Typography whiteSpace="pre-line">{text}</Typography>
        </Stack>
        <Box
          sx={{ width: "100%", position: "fixed", bottom: 0 }}
          p="16px 16px"
          m="0 -16px"
          bgcolor="white"
        >
          <Button sx={{ width: "100%" }} variant="contained" onClick={onClick}>
            <Typography variant="h6">대여예약</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ProductDetailContainer;
