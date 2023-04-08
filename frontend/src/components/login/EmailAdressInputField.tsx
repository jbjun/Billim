import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputField from "@components/InputField";
function EmailAdressInputField() {
  return (
    <InputField
      disabled
      required
      label={"이메일"}
      value={"abc@naver.com"}
      startAdornment={<AccountCircle />}
      inputStyle={{ backgroundColor: "rgb(157 153 153 / 40%)" }}
    />
  );
}

export default EmailAdressInputField;
