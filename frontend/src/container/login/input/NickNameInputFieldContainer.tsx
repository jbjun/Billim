import { Chip } from "@mui/material";
import React, { useState } from "react";
import InputField from "@components/InputField";
import { IVerifiableInputProps } from "../RegisterContainer";
import { fetchCheckNickName } from "@lib/api/loginApi";
import useStateFromProp from "@lib/hooks/useStateFromProp";

interface INickNameInputFieldContainer {
  id: IVerifiableInputProps["id"];
  onVerify: IVerifiableInputProps["onVerify"];
  value?: string;
  required?: boolean;
}
function NickNameInputFieldContainer({
  id,
  onVerify,
  value,
  required = true,
}: INickNameInputFieldContainer) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nickName, setNickName] = useStateFromProp(value || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
  };

  const onCheckNickName = async () => {
    const result = await fetchCheckNickName(nickName);
    // 서버 요청에 따라 처리
    if (result) {
      // 성공
      onVerify({ id, verified: true, value: nickName });
      setSuccess(true);
      setError(false);
    } else {
      // 실패
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <InputField
      label="닉네임"
      value={nickName}
      onChange={onChange}
      placeholder="거래시 사용할 닉네임을 입력해주세요"
      required={required}
      error={error}
      helperText="이미 사용중인 닉네임 입니다. 다른 닉네임을 입력해 주세요."
      success={success}
      successHelperText="사용 가능한 닉네임 입니다."
      endAdornment={
        <Chip label="중복확인" size="small" onClick={onCheckNickName} />
      }
    />
  );
}

export default NickNameInputFieldContainer;
