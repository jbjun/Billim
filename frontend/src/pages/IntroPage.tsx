import Header from "@components/layout/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import NaverLogo from "@assets/images/login/Naver_btn.png";
import LoginBillimCharacter from "@assets/images/Intro_billim_character.png";
import BillimImage from "@components/common/BillimImage";
function IntroPage() {
  return (
    <>
      <Header needBackHistory />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        sx={{ height: "100%", textAlign: "center" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{
              p: 2,
              fontSize: "5rem",
              fontWeight: 700,
              lineHeight: "76px",
              letterSpacing: "-0.02rem",
            }}
          >
            빌림
          </Typography>
          <Typography variant="subtitle1">
            나의 계륵이 이웃에게 보물이 되는 곳
          </Typography>
          <BillimImage src={LoginBillimCharacter} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}

export default IntroPage;
