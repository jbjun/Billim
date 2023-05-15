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
import { useParams } from "react-router-dom";
import React, { Suspense, useState } from "react";

// 내부모듈
import RentalStatusTag from "@components/common/RentStatusTag";
import { ReactComponent as ViewIcon } from "@assets/icons/View_icon.svg";
import { useGetProduct } from "@lib/hooks/query/product";
import Carousel from "@components/home/productDetail/Carousel";
import DetailSkeletonUI from "@components/home/productDetail/DetailSkeletonUI";
import GlobalSpinner from "@container/common/GlobalSpinner";
import useIncrementViewCount from "@lib/hooks/useIncrementViewCount";

const ReservationDialogContainer = React.lazy(
  () => import("@container/home/productDetail/ReservationDialogContainer")
);

const ProductDetailContainer = () => {
  const theme = useTheme();
  const { id } = useParams();

  if (!id) return null;

  // dialog
  const [isOpenReservation, setIsOpenReservation] = useState(false);
  const handleClose = () => setIsOpenReservation(false);

  // 페이지 뷰카운트 증가
  useIncrementViewCount(id);

  // product get
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
    publisherId,
    borrowedDays,
  } = data;
  const isMyProduct = publisherId === "1"; // TODO 추후 수정

  const handleReservation = () => setIsOpenReservation(true);
  const handleChatting = () => null;

  const handleClick = () =>
    isMyProduct ? handleReservation() : handleChatting();

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
        <Stack spacing={2.5} pb="84px">
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
          <Button
            sx={{ width: "100%" }}
            variant="contained"
            onClick={handleClick}
          >
            <Typography variant="h6">
              {isMyProduct ? "대여예약" : "채팅하기"}
            </Typography>
          </Button>
        </Box>
      </Container>
      <Suspense fallback={<GlobalSpinner />}>
        <ReservationDialogContainer
          lenderId={publisherId}
          borrowedDays={borrowedDays}
          open={isOpenReservation}
          price={price}
          onClose={handleClose}
        />
      </Suspense>
    </>
  );
};

export default ProductDetailContainer;
