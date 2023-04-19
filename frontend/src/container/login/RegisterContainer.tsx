import React, { useState, useMemo } from "react";
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
  const [registerForm, setRegisterForm] = useState({
    username: { verified: false, value: "" },
    email: { verified: true, value: "abc@naver.com" },
    phoneNumber: { verified: false },
    address: { verified: false, value: "" },
    nickname: { verified: false, value: "" },
  });
  const isRegistable = useMemo(() => {
    return Object.values(registerForm).every((info) => info.verified);
  }, [registerForm]);

  const onRegister = () => {
    // server에 registerForm 정보 전송
  };
  const onVerify = ({ id, verified, value }: IVerfiyInfo) => {
    const newRegisterForm = produce(registerForm, (draft) => {
      draft[id].verified = verified;
      if (id !== "phoneNumber" && value) {
        draft[id].value = value;
      }
    });
    setRegisterForm(newRegisterForm);
  };
  return (
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
          onVerify={onVerify}
          value={registerForm.username.value}
        />
      </Grid>
      <Grid item xs={12}>
        <EmailAdressInputField value={registerForm.email.value} />
      </Grid>
      <Grid item xs={12}>
        <PhoneNumberInputFieldContainer id="phoneNumber" onVerify={onVerify} />
      </Grid>
      {/* <Grid item xs={12}>
        <VerificationCodeInputFieldContainer />
      </Grid> */}
      <Grid item xs={12}>
        <AddressInputFieldContainer id="address" onVerify={onVerify} />
      </Grid>
      <Grid item xs={12}>
        <NickNameInputFieldContainer id="nickname" onVerify={onVerify} />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
          disabled={!isRegistable}
          onClick={onRegister}
        >
          회원가입 하기
        </Button>
      </Grid>
    </Grid>
  );
}

export default RegisterContainer;
