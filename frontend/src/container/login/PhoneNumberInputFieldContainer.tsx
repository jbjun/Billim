import { Chip } from "@mui/material"
import React, { useState } from "react"
import InputField from "../../components/InputField"

function PhoneNumberInputFieldContainer() {
  const [error, setError] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")

  const onChange = () => {}
  return (
    <InputField
      label="휴대폰번호"
      value={phoneNumber}
      onChange={onChange}
      placeholder="'-'없이 숫자만 입력해 주세요."
      error={error}
      helperText="휴대폰번호를 입력해 주세요."
      required
      adornment={<Chip label="인증받기" size="small" onClick={() => {}} />}
    />
  )
}

export default PhoneNumberInputFieldContainer
