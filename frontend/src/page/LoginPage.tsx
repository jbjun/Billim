import React from "react";
import NameInputField from "../components/login/NameInputField";
import PhoneNumberInputFieldContainer from "../container/login/PhoneNumberInputFieldContainer";
import AddressInputFieldContainer from "../container/login/AddressInputFieldContainer";
import NickNameInputFieldContainer from "../container/login/NickNameInputFieldContainer";
import Header from "../components/layout/Header";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import VerificationCodeInputField from "../components/login/VerificationCodeInputField";

function SpeechBubble() {
  const theme = useTheme();
  return (
    <Box
      // className="speech-bubble"
      sx={{
        position: "relative",
        background: "#d9d9d9",
        borderRadius: "0.4em",
        width: "90%",
        height: "60px",
        padding: "12px",
        fontSize: "0.8rem",
        mb: 2,
        "&::after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: "50%",
          width: "0",
          height: "0",
          border: "25px solid transparent",
          borderTopColor: "#d9d9d9",
          borderBottom: "0",
          borderLeft: "0",
          marginLeft: "-145px",
          marginBottom: "-15px",
          transform: "rotate(25deg)",
        },
      }}
    >
      <Typography>회원가입 완료까지 한 단계 남았어요!</Typography>
      <Typography>회원 정보를 입력하시고 회원가입을 완료하세요.</Typography>
    </Box>
  );
}

function LoginPage() {
  return (
    <>
      <Header title="회원가입" />
      <Grid
        container
        sx={{ p: 2 }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <SpeechBubble />
        </Grid>
        <Grid item xs={12}>
          <NameInputField />
        </Grid>
        <Grid item xs={12}>
          <PhoneNumberInputFieldContainer />
        </Grid>
        <Grid item xs={12}>
          <VerificationCodeInputField />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" sx={{ width: "100%" }}>
            인증번호 확인
          </Button>
        </Grid>
        <Grid item xs={12}>
          <AddressInputFieldContainer />
        </Grid>
        <Grid item xs={12}>
          <NickNameInputFieldContainer />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
            }}
          >
            회원가입 하기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
