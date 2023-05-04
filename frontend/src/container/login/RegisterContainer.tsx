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
import { registerUser } from "@lib/api/loginApi";
import { useNavigate } from "react-router";
import { HOME_PATH } from "@routes/index";

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

interface IRegisterForm {
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
  const userInfo = useUserInfo();
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({
    username: { verified: false, value: "" },
    email: { verified: true, value: "" },
    phoneNumber: { verified: false, value: "" },
    address: { verified: false, value: "" },
    nickname: { verified: false, value: "" },
  });
  const isRegistable = useMemo(() => {
    return Object.values(registerForm).every((info) => info.verified);
  }, [registerForm]);

  const onRegister = async () => {
    const { phoneNumber, address, nickname } = registerForm;
    // server에 registerForm 정보 전송
    try {
      await registerUser({
        phoneNumber: phoneNumber.value,
        nickname: nickname.value,
        address: address.value,
      });

      navigate(`/${HOME_PATH}`);
    } catch (error) {
      console.error(error);
    }
  };
  const onVerify = ({ id, verified, value }: IVerfiyInfo) => {
    const newRegisterForm = produce(registerForm, (draft) => {
      draft[id].verified = verified;
      if (value) {
        draft[id].value = value;
      }
    });
    setRegisterForm(newRegisterForm);
  };

  useLayoutEffect(() => {
    if (userInfo) {
      setRegisterForm({
        username: { verified: true, value: userInfo.name },
        email: { verified: true, value: userInfo.email },
        phoneNumber: { verified: false, value: "" },
        address: { verified: false, value: "" },
        nickname: { verified: false, value: "" },
      });
    }
  }, [userInfo]);
  if (!userInfo) {
    return null;
  }

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
