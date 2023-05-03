import Header from "@components/layout/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import NaverLogo from "@assets/images/login/Naver_btn.png";
import LoginBillimCharacter from "@assets/images/login/Login_billim_character.png";
import BillimImage from "@components/common/BillimImage";
function LoginPage() {
  return (
    <>
      <Header needBackHistory />
      <Grid container spacing={2} sx={{ mt: 2, p: 1.5 }}>
        <Grid item xs={12}>
          <Typography variant="h4">로그인</Typography>
          <Typography variant="subtitle1">
            소셜로그인으로 3초만에 간단하게 가입해 보세요!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BillimImage src={LoginBillimCharacter} />
        </Grid>
        <Grid item xs={12}>
          <a
            href="http://localhost:8080/oauth2/authorization/naver"
            // href={`http://localhost:7777/${NAVER_REDIRECT_PATH}?oauthId=123&isRegistered=true`}
          >
            <Button
              sx={{ backgroundColor: "#03C75A", color: "white" }}
              fullWidth
              startIcon={<img src={NaverLogo} alt="naver_logo" />}
            >
              네이버 로그인
            </Button>
          </a>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
