import { Chip, Grid } from "@mui/material";
import React, { useState } from "react";
import InputField from "@components/InputField";
import VerificationCodeInputFieldContainer from "./VerificationCodeInputFieldContainer";
import { flushSync } from "react-dom";
import { createValidator } from "@lib/utils/validator";

const validateWholePhoneNumber = createValidator(/^010[0-9]{8}$/);
const validatePhoneNumber = createValidator(/^\d{0,11}$/);

// 인증 받기, 재요청, 인증완료
function PhoneNumberInputFieldContainer() {
  const [error, setError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationStatus, setVerificationStatus] =
    useState<
      "verification" | "reVerification" | "completedVerification" | "none"
    >("verification");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validatePhoneNumber(value)) {
      setPhoneNumber(value);
    }
  };
  const onVerifyPhoneNumber = async () => {
    const validated = validateWholePhoneNumber(phoneNumber);
    if (!validated) return;
    await requestPhoneNumberVerificationCode();
    setVerificationStatus("reVerification");
  };

  const onReverifyPhoneNumber = async () => {
    const validated = validateWholePhoneNumber(phoneNumber);
    if (!validated) return;
    // server에 재요청 후 완료 되었을 때 UI 처리
    await requestPhoneNumberVerificationCode();
    // VerificationCodeInputFieldContainer unmount 후 mount 하기
    flushSync(() => {
      setVerificationStatus("none");
    });

    setVerificationStatus("reVerification");
  };

  const onVerify = async (code: number) => {
    /* 서버 요청 및 인증번호 검증
        검증 성공 시 
        VerificationCodeInputFieldContainer 사라지고 인증 완료  
        
        실패 시
        시간 리셋
      */
    const result = await requestPhoneNumberVerify(code);

    // if (result) {
    //   // 성공
    //   setVerificationStatus("completedVerification");
    // } else {
    //   // 실패 처리
    // }
  };

  const requestPhoneNumberVerificationCode = async () => {
    // server에 인증번호 요청
  };

  const requestPhoneNumberVerify = async (code: number) => {
    // server에 인증번호 확인
  };
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <InputField
            label="휴대폰번호"
            value={phoneNumber}
            onChange={onChange}
            placeholder="'-'없이 숫자만 입력해 주세요."
            error={error}
            helperText="휴대폰번호를 입력해 주세요."
            required
            endAdornment={
              verificationStatus === "verification" ? (
                <VerificationChip onVerifyPhoneNumber={onVerifyPhoneNumber} />
              ) : verificationStatus === "reVerification" ? (
                <ReVerificationChip
                  onReVerifyPhoneNumber={onReverifyPhoneNumber}
                />
              ) : (
                <CompletedVerificationChip />
              )
            }
          />
        </Grid>
        {verificationStatus === "verification" ||
          (verificationStatus === "reVerification" && (
            <Grid item xs={12}>
              <VerificationCodeInputFieldContainer onVerify={onVerify} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

interface IVerificationChipProps {
  onVerifyPhoneNumber: React.MouseEventHandler<HTMLDivElement>;
}
function VerificationChip({ onVerifyPhoneNumber }: IVerificationChipProps) {
  return <Chip label="인증받기" size="small" onClick={onVerifyPhoneNumber} />;
}

interface IReVerificationChipProps {
  onReVerifyPhoneNumber: React.MouseEventHandler<HTMLDivElement>;
}
function ReVerificationChip({
  onReVerifyPhoneNumber,
}: IReVerificationChipProps) {
  return <Chip label="재발송" size="small" onClick={onReVerifyPhoneNumber} />;
}

function CompletedVerificationChip() {
  return <Chip label="인증완료" size="small" color="success" />;
}

export default PhoneNumberInputFieldContainer;
