import { Chip, Grid } from "@mui/material";
import React, { useState } from "react";
import InputField from "@components/InputField";
import VerificationCodeInputFieldContainer from "./VerificationCodeInputFieldContainer";
import { flushSync } from "react-dom";
import { createValidator } from "@lib/utils/validator";
import { IVerifiableInputProps } from "../RegisterContainer";
import { fetchCheckSMS, sendVerificationCodeBySMS } from "@lib/api/userApi";

const validateWholePhoneNumber = createValidator(/^010[0-9]{8}$/);
const validatePhoneNumber = createValidator(/^\d{0,11}$/);

// 인증 진행 중 / 잘못된 핸드폰 번호
type AnnouncementType = "VERIFICATION" | "PHONE_NUMBER_ERROR" | "NONE";

function getAnnouncement(
  announcementType: AnnouncementType
): React.ReactElement | string | undefined {
  if (announcementType === "VERIFICATION") {
    return (
      <>
        인증번호를 발송했습니다. (유효기간 2분)
        <br />
        인증번호가 오지 않으면 입력하신 정보가 정확한지 확인해 주세요.
      </>
    );
  } else if (announcementType === "PHONE_NUMBER_ERROR") {
    return "휴대폰번호가 유효하지 않습니다. 입력하신 정보가 정확한 지 확인해 주세요.";
  } else {
    ("");
  }
}
interface IPhoneNumberInputFieldContainerProps {
  id: IVerifiableInputProps["id"];
  onVerify: IVerifiableInputProps["onVerify"];
}
// 인증 받기, 재요청, 인증완료
function PhoneNumberInputFieldContainer({
  id,
  onVerify,
}: IPhoneNumberInputFieldContainerProps) {
  const [announcementStatus, setAnnouncement] =
    useState<AnnouncementType>("NONE");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationStatus, setVerificationStatus] = useState<
    "VERIFICATION" | "RE_VERIFICATION" | "COMPLETED_VERIFICATION" | "NONE"
  >("VERIFICATION");
  // const [verificationCode, setVerificationCode] = useState("123456");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validatePhoneNumber(value)) {
      setPhoneNumber(value);
    }
  };
  const onVerifyPhoneNumber = async () => {
    const validated = validateWholePhoneNumber(phoneNumber);
    if (!validated) {
      setAnnouncement("PHONE_NUMBER_ERROR");
      return;
    }
    try {
      await sendVerificationCodeBySMS(phoneNumber);
      setVerificationStatus("RE_VERIFICATION");
      setAnnouncement("VERIFICATION");
    } catch (error) {
      console.error(error);
    }
  };

  const onReverifyPhoneNumber = async () => {
    const validated = validateWholePhoneNumber(phoneNumber);
    if (!validated) return;

    try {
      await sendVerificationCodeBySMS(phoneNumber);
      // server에 재요청 후 완료 되었을 때 UI 처리
      // VerificationCodeInputFieldContainer unmount 후 mount 하기
      flushSync(() => {
        setVerificationStatus("NONE");
      });

      setVerificationStatus("RE_VERIFICATION");
    } catch (error) {
      console.error(error);
    }
  };

  const onLocalVerify = async (code: string) => {
    const result = await fetchCheckSMS(code, phoneNumber);
    // 인증 성공
    if (result) {
      // 성공 시 호출됌
      setVerificationStatus("COMPLETED_VERIFICATION");
      setAnnouncement("NONE");
      onVerify({ id, verified: true, value: phoneNumber });
    }

    return result;
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
            error={announcementStatus !== "NONE"}
            helperText={getAnnouncement(announcementStatus)}
            required
            endAdornment={
              verificationStatus === "VERIFICATION" ? (
                <VerificationChip onVerifyPhoneNumber={onVerifyPhoneNumber} />
              ) : verificationStatus === "RE_VERIFICATION" ? (
                <ReVerificationChip
                  onReVerifyPhoneNumber={onReverifyPhoneNumber}
                />
              ) : (
                <CompletedVerificationChip />
              )
            }
          />
        </Grid>
        {verificationStatus === "VERIFICATION" ||
          (verificationStatus === "RE_VERIFICATION" && (
            <Grid item xs={12}>
              <VerificationCodeInputFieldContainer
                onVerify={onLocalVerify}
                // code={verificationCode}
              />
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
