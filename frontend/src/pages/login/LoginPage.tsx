import Header from "@components/layout/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import NaverLogo from "@assets/images/naver_btn.png";
import LoginBillimCharacter from "@assets/images/Login_billim_character.png";
function LoginPage() {
  return (
    <>
      <Header title="상품등록" onBackHistory={() => {}} />
      <Grid container spacing={2} sx={{ mt: 2, p: 1.5 }}>
        <Grid item xs={12}>
          <Typography variant="h4">로그인</Typography>
          <Typography variant="subtitle1">
            소셜로그인으로 3초만에 간단하게 가입해 보세요!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img
            style={{ width: "300px", height: "300px" }}
            src={LoginBillimCharacter}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ backgroundColor: "#03C75A", color: "white" }}
            fullWidth
            startIcon={<img src={NaverLogo} alt="naver_logo" />}
          >
            네이버 로그인
          </Button>
        </Grid>
        {/* <Grid item xs={12}>
          <Button
            sx={{ backgroundColor: "#FEE500", color: "black" }}
            fullWidth
            startIcon={<DeleteIcon />}
          >
            카카오 로그인
          </Button>
        </Grid> */}
      </Grid>
    </>
  );
}

export default LoginPage;
