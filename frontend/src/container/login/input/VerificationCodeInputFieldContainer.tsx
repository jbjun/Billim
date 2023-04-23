import React, { useEffect, useRef, useState } from "react";
import InputField from "@components/InputField";
import { Button, Typography } from "@mui/material";
import { createValidator } from "@lib/utils/validator";
import { flushSync } from "react-dom";

const validateCode = createValidator(/^[1-9]{0,6}$/);
const initialTime = 3;
interface IVerificationCodeInputFieldContainerProps {
  onVerify: any;
  code: string;
}

type ErrorType = "INVALID_CODE" | "TIME_OUT" | "NONE";

function getErrorMessageElement(
  error: ErrorType
): React.ReactElement | string | undefined {
  if (error === "INVALID_CODE") {
    return "인증번호가 유효하지 않습니다. 유효한 인증번호를 다시 입력해주세요.";
  } else if (error === "TIME_OUT") {
    return (
      <>
        인증번호 입력 시간이 만료됐습니다.
        <br />
        재발송 버튼을 눌러서 인증번호를 다시 받아주세요.
      </>
    );
  }
}
function VerificationCodeInputFieldContainer({
  code,
  onVerify,
}: IVerificationCodeInputFieldContainerProps) {
  const [verificationCode, setVerificationCode] = useState("");
  const [time, setTime] = useState(initialTime);
  const [error, setError] = useState<ErrorType>("NONE");

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  if (time <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    // setInterval에서의 setter가 후순위에 실행되면서 정상적으로 render 되지 않음 error 상태가 TIME_OUT -> NONE으로 재설정됌
    setTimeout(() => {
      setError("TIME_OUT");
    }, 0);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const result = validateCode(value);
    if (result) {
      setVerificationCode(value);
    }
  };

  const onLocalVerify = () => {
    // 시간 초과인경우 인증할 수 없음
    if (time <= 0) {
      return;
    }

    if (verificationCode === code) {
      // 통과
      onVerify();
    } else {
      setError("INVALID_CODE");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    intervalRef.current = interval;

    return () => clearInterval(interval);
  }, [intervalRef]);

  return (
    <>
      <InputField
        value={verificationCode}
        onChange={onChange}
        placeholder="인증번호를 입력해 주세요."
        error={error !== "NONE"}
        helperText={getErrorMessageElement(error)}
        endAdornment={<Typography>{timeConverter(time)}</Typography>}
      />
      <Button
        variant="contained"
        sx={{ width: "100%", mt: 2 }}
        disabled={!isVerifiable(verificationCode, time)}
        onClick={onLocalVerify}
      >
        인증번호 확인
      </Button>
    </>
  );
}

function timeConverter(time: number): string {
  if (time <= 0) {
    return `00:00`;
  }
  let minutes: number | string = Math.floor(time / 60); // 분 계산
  let seconds: number | string = time % 60; // 초 계산
  // 분과 초가 10보다 작을 경우, 앞에 0을 붙여줍니다.
  minutes = minutes < 10 ? "0" + minutes : minutes.toString();
  seconds = seconds < 10 ? "0" + seconds : seconds.toString();
  return `${minutes}:${seconds}`;
}

function isVerifiable(value: string, time: number): boolean {
  if (time < 0) {
    return false;
  }

  const isValidated = validateCode(value);
  if (!isValidated) return false;

  if (value.length !== 6) return false;

  return true;
}

export default React.memo(VerificationCodeInputFieldContainer);
