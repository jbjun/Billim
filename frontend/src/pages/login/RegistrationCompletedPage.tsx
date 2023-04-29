import Header from "@components/layout/Header";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CompletedRegisterBillimCharacter from "@assets/images/login/Completed_register_billim_character.png";
import BillimImage from "@components/common/BillimImage";
function RegistrationCompletedPage() {
  return (
    <>
      <Header title="네이버 회원가입 완료" needBackHistory />
      <Grid container spacing={2} sx={{ mt: 2, p: 1.5 }}>
        <Grid item xs={12}>
          <Typography variant="h5">빌리진님 환영합니다!</Typography>
          <Typography variant="subtitle1">
            빌림 회원가입이 완료되었습니다.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <BillimImage src={CompletedRegisterBillimCharacter} />
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
