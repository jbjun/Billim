import { InputAdornment, SxProps, TextField, Theme } from "@mui/material"
import { green } from "@mui/material/colors"
import React from "react"

// 입력값
// 변하면 event 발생
// 버튼 여부
// 필수 여부

interface InputFieldProps {
  label?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  // 필수입력 여부 설정
  required?: boolean
  placeholder: string
  /* 에러 발생 시 에러 메시지 표시*/
  error?: boolean
  helperText?: string

  success?: boolean
  successHelperText?: string

  // 인증받기, 중복확인 등 / 이름 미정
  adornment?: React.ReactElement
}
function InputField({ label, value, error, helperText, success, successHelperText, onChange, required = false, placeholder, adornment }: InputFieldProps) {
  return (
    <TextField
      required={required}
      label={label}
      InputLabelProps={{
        error: false,
      }}
      value={value}
      placeholder={placeholder}
      error={error}
      helperText={getHelperText(error, helperText, success, successHelperText)}
      onChange={onChange}
      InputProps={{
        sx: getInputStyle(success),
        // label의 value 가림 방지용 / 추후 css 적으로 처리할 수 있는지 확인 필요
        startAdornment: <span></span>,
        endAdornment: adornment ? <InputAdornment position="end">{adornment}</InputAdornment> : null,
      }}
      FormHelperTextProps={{
        sx: getHelperTextStyle(success),
      }}
      variant="standard"
      fullWidth
    />
  )
}

export default InputField

function getHelperText(error: boolean | undefined, errorHelperText: string | undefined, success: boolean | undefined, successHelperText: string | undefined): string {
  if (error && errorHelperText) return errorHelperText

  if (success && successHelperText) return successHelperText

  return ""
}

function getInputStyle(success: boolean | undefined): SxProps<Theme> | undefined {
  if (success) {
    return {
      "&::before": { borderBottomColor: "green !important" },
      "&::after": { borderBottomColor: "green !important" },
    }
  }

  return
}
function getHelperTextStyle(success: boolean | undefined): SxProps<Theme> | undefined {
  if (success) {
    return {
      color: "green !important",
    }
  }

  return
}
