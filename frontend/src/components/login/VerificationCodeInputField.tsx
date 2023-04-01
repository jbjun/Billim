import React, { useEffect, useState } from "react"
import InputField from "../InputField"
import { Typography } from "@mui/material"
import { createValidator } from "../../utils/validator"

const validateCode = createValidator(/^[1-9]{0,6}$/)

function VerificationCodeInputField() {
  const [verificationCode, setVerificationCode] = useState("")
  const [time, setTime] = useState(120)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const result = validateCode(value)
    if (result) {
      setVerificationCode(value)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <InputField
      value={verificationCode}
      onChange={onChange}
      placeholder="인증번호를 입력해 주세요."
      // error={error}
      // helperText="휴대폰번호를 입력해 주세요."
      adornment={<Typography>{timeConverter(time)}</Typography>}
    />
  )
}

function timeConverter(time: number): string {
  let minutes: number | string = Math.floor(time / 60) // 분 계산
  let seconds: number | string = time % 60 // 초 계산
  // 분과 초가 10보다 작을 경우, 앞에 0을 붙여줍니다.
  minutes = minutes < 10 ? "0" + minutes : minutes.toString()
  seconds = seconds < 10 ? "0" + seconds : seconds.toString()
  return `${minutes}:${seconds}`
}

export default VerificationCodeInputField
