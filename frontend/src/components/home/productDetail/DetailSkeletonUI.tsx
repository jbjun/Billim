// 외부모듈
import RentalStatusTag from "@components/common/RentStatusTag";
import {
  Avatar,
  Divider,
  Skeleton,
  Stack,
  Box,
  Container,
  Button,
  Typography,
} from "@mui/material";

const DetailSkeletonUI = () => {
  return (
    <>
      <Skeleton width="100vw" height="375px" animation="wave" component="div" />
      <Container sx={{ pt: "20px" }}>
        <Stack spacing={2.5}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: "36px", height: "36px" }} />
            <Box sx={{ ml: "8px" }}>
              <Skeleton width="36px" height="17px" animation="wave" />
              <Skeleton width="64px" height="14px" animation="wave" />
            </Box>
          </Box>
          <Box>
            <Box sx={{ float: "left" }} mr="4px">
              <Skeleton width="55px" height="19px" animation="wave" />
            </Box>
            <Skeleton width="132px" height="19px" animation="wave" />
            <Box display="flex" alignItems="center" mt="8px">
              <Skeleton width="132px" height="16px" animation="wave" />
            </Box>
          </Box>
          <Box display="flex">
            <Skeleton width="90px" height="19px" animation="wave" />
          </Box>
          <Divider />
          <Skeleton width="100%" height="100%" animation="wave" />
        </Stack>
        <Box
          sx={{ width: "100%", position: "fixed", bottom: 0 }}
          p="16px 16px"
          m="0 -16px"
        >
          <Button sx={{ width: "100%" }} variant="contained">
            <Typography variant="h6">대여예약</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default DetailSkeletonUI;
