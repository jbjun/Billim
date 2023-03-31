import { InputAdornment, TextField } from "@mui/material"
import React from "react"

// 입력값
// 변하면 event 발생
// 버튼 여부
// 필수 여부

interface InputFieldProps {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  // 필수입력 여부 설정
  required?: boolean
  placeholder: string
  /* 에러 발생 시 에러 메시지 표시*/
  error?: boolean
  helperText?: string

  // 인증받기, 중복확인 등 / 이름 미정
  adornment?: React.ReactElement
}
function InputField({ label, value, error, helperText, onChange, required = false, placeholder, adornment }: InputFieldProps) {
  return (
    <TextField
      required={required}
      label={label}
      value={value}
      placeholder={placeholder}
      error={error}
      helperText={error ? helperText : ""}
      onChange={onChange}
      InputProps={{
        // label의 value 가림 방지용 / 추후 css 적으로 처리할 수 있는지 확인 필요
        startAdornment: <span></span>,
        endAdornment: adornment ? <InputAdornment position="end">{adornment}</InputAdornment> : null,
      }}
      variant="standard"
      fullWidth
    />
  )
}

export default InputField
