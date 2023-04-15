import React, { useEffect, useRef, useState } from "react";
import InputField from "@components/InputField";
import { Button, Typography } from "@mui/material";
import { createValidator } from "@lib/utils/validator";

const validateCode = createValidator(/^[1-9]{0,6}$/);
const initialTime = 120;
interface IVerificationCodeInputFieldContainerProps {
  onVerify: any;
}
function VerificationCodeInputFieldContainer({
  onVerify,
}: IVerificationCodeInputFieldContainerProps) {
  const [verificationCode, setVerificationCode] = useState("");
  const [time, setTime] = useState(initialTime);

  const intervalRef = useRef();

  if (time <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const result = validateCode(value);
    if (result) {
      setVerificationCode(value);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <InputField
        value={verificationCode}
        onChange={onChange}
        placeholder="인증번호를 입력해 주세요."
        endAdornment={
          time > 0 ? <Typography>{timeConverter(time)}</Typography> : undefined
        }
      />
      <Button
        variant="contained"
        sx={{ width: "100%", mt: 2 }}
        disabled={!isVerifiable(verificationCode)}
        onClick={onVerify}
      >
        인증번호 확인
      </Button>
    </>
  );
}

function timeConverter(time: number): string {
  let minutes: number | string = Math.floor(time / 60); // 분 계산
  let seconds: number | string = time % 60; // 초 계산
  // 분과 초가 10보다 작을 경우, 앞에 0을 붙여줍니다.
  minutes = minutes < 10 ? "0" + minutes : minutes.toString();
  seconds = seconds < 10 ? "0" + seconds : seconds.toString();
  return `${minutes}:${seconds}`;
}

function isVerifiable(value: string): boolean {
  const isValidated = validateCode(value);
  if (!isValidated) return false;

  if (value.length !== 6) return false;

  return true;
}

export default VerificationCodeInputFieldContainer;
