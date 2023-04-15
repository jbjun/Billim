import Header from "@components/layout/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function LoginPage() {
  return (
    <>
      <Header title="" onBackHistory={() => {}} />
      <Grid container spacing={2} sx={{ mt: 2, p: 1.5 }}>
        <Grid item xs={12}>
          <Typography variant="h5">로그인</Typography>
          <Typography variant="subtitle1">
            소셜로그인으로 3초만에 간단하게 가입해 보세요!
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
            sx={{ backgroundColor: "#03C75A", color: "white" }}
            fullWidth
            startIcon={<DeleteIcon />}
          >
            네이버 로그인
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ backgroundColor: "#FEE500", color: "black" }}
            fullWidth
            startIcon={<DeleteIcon />}
          >
            카카오 로그인
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
