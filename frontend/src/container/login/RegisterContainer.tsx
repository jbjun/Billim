import React, { useState, useMemo, useLayoutEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { produce } from "immer";
import PhoneNumberInputFieldContainer from "./input/PhoneNumberInputFieldContainer";
import AddressInputFieldContainer from "./input/AddressInputFieldContainer";
import NickNameInputFieldContainer from "./input/NickNameInputFieldContainer";
import NameInputField from "@components/login/NameInputField";
import EmailAdressInputField from "@components/login/EmailAdressInputField";
import { useUserInfo } from "@lib/hooks/query/loginQuery";
import { updateUserInfo } from "@lib/api/userApi";
import { useNavigate } from "react-router";
import { HOME_PATH } from "@routes/index";
import PageLayout from "@components/layout/PageLayout";
import Header from "@components/layout/Header";
import useUpdateUser from "@lib/hooks/useUpdateUser";
import { REGISTRATION_COMPLETED_PATH } from "@routes/login";

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
        height: "80px",
        padding: "8px",
        fontSize: "0.7rem",
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
      <Grid
        container
        sx={{ width: "100%", height: "100%" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Typography sx={{ fontSize: "0.9rem" }}>
            회원가입 완료까지 한 단계 남았어요! <br />
            회원 정보를 입력하시고 회원가입을 완료하세요.
          </Typography>
        </Grid>
      </Grid>
      {/* <Typography>회원 정보를 입력하시고 회원가입을 완료하세요.</Typography> */}
    </Box>
  );
}

interface IuserForm {
  username: { verified: boolean; value: string };
  email: { verified: boolean; value: string };
  phoneNumber: { verified: boolean; value: string };
  address: { verified: boolean; value: string };
  nickname: { verified: boolean; value: string };
}

interface IVerfiyInfo {
  id: "username" | "email" | "phoneNumber" | "address" | "nickname";
  verified: boolean;
  value?: string;
}
export interface IVerifiableInputProps {
  value: IVerfiyInfo["value"];
  onVerify: (info: IVerfiyInfo) => void;
  id: IVerfiyInfo["id"];
}
function RegisterContainer() {
  const navigate = useNavigate();
  const { userForm, onChangeUserForm, onUpdateUser } = useUpdateUser({
    isRegister: true,
  });

  // if (!userForm) {
  //   return null;
  // }

  const onRegister = () => {
    onUpdateUser();
    navigate(`/${REGISTRATION_COMPLETED_PATH}`);
  };
  const isRegistable = useMemo(() => {
    return Object.values(userForm).every((info) => info.verified);
  }, [userForm]);

  return (
    <PageLayout
      header={<Header title="회원가입" needBackHistory />}
      body={
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
            <NameInputField
              id="username"
              onVerify={onChangeUserForm}
              value={userForm.username.value}
            />
          </Grid>
          <Grid item xs={12}>
            <EmailAdressInputField value={userForm.email.value} />
          </Grid>
          <Grid item xs={12}>
            <PhoneNumberInputFieldContainer
              id="phoneNumber"
              onVerify={onChangeUserForm}
            />
          </Grid>

          <Grid item xs={12}>
            <AddressInputFieldContainer
              id="address"
              onVerify={onChangeUserForm}
            />
          </Grid>
          <Grid item xs={12}>
            <NickNameInputFieldContainer
              id="nickname"
              onVerify={onChangeUserForm}
            />
          </Grid>
        </Grid>
      }
      footer={
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
          disabled={!isRegistable}
          onClick={onRegister}
          fullWidth
        >
          회원가입 하기
        </Button>
      }
    />
  );
}

export default RegisterContainer;
