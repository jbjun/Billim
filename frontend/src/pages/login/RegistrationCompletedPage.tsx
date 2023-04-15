import Header from "@components/layout/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

function RegistrationCompletedPage() {
  return (
    <>
      <Header title="네이버 회원가입 완료" onBackHistory={() => {}} />
      <Grid container spacing={2} sx={{ mt: 2, p: 1.5 }}>
        <Grid item xs={12}>
          <Typography variant="h5">빌리진님 환영합니다!</Typography>
          <Typography variant="subtitle1">
            빌림 회원가입이 완료되었습니다.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "300px" }}>
            <img
              style={{ width: "300px", height: "300px" }}
              src="https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            홈으로 돌아가기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default RegistrationCompletedPage;
