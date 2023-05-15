// 외부모듈

import { Box, Container, Skeleton, Stack } from "@mui/material";

const RentalHistorySkeleton = () => {
  return (
    <Container sx={{ mt: "20px", pb: "56px" }}>
      <Box display="flex">
        <Skeleton width="80px" height="48px" />
        <Skeleton width="80px" height="48px" />
      </Box>
      <Box overflow="hidden" p="24px 0">
        <Box display="flex" alignItems="center" mb="8px">
          <Skeleton width="47px" height="21px" sx={{ mr: "8px" }} />
          <Skeleton width="200px" height="16px" />
        </Box>
        <Box display="flex" height="90px">
          <Skeleton width="90px" height="90px" />
          <Stack pl="8px" spacing={1}>
            <Skeleton width="50px" height="16px" />
            <Skeleton width="80px" height="16px" />
            <Skeleton width="50px" height="16px" />
            <Skeleton width="50px" height="16px" />
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{ height: "7px", backgroundColor: "#F3F7FA", margin: "0 -16px" }}
      />
    </Container>
  );
};

export default RentalHistorySkeleton;
