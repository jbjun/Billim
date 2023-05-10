import { InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import _ from "lodash";
import React from "react";

interface InputFieldProps {
  label?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // 필수입력 여부 설정
  required?: boolean;

  // 입력 불가능 설정
  disabled?: boolean;

  placeholder?: string;
  /* 에러 발생 시 에러 메시지 표시*/
  error?: boolean;
  helperText?: string | React.ReactElement;

  success?: boolean;
  successHelperText?: string;

  // 인증받기, 중복확인 등 / 이름 미정
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;

  // input의 스타일을 직접 지정합니다.
  inputStyle?: SxProps<Theme>;
}
function InputField({
  label,
  value,
  error,
  helperText,
  success,
  successHelperText,
  onChange,
  required = false,
  disabled = false,
  placeholder,
  startAdornment,
  endAdornment,
  inputStyle,
}: InputFieldProps) {
  return (
    <TextField
      required={required}
      disabled={disabled}
      label={label}
      InputLabelProps={{
        error: false,
      }}
      value={value}
      placeholder={placeholder}
      error={error}
      //@ts-ignore
      helperText={getHelperText(error, helperText, success, successHelperText)}
      onChange={onChange}
      InputProps={{
        sx: getInputStyle({ success, disabled, inputStyle }),
        // label의 value 가림 방지용 / 추후 css 적으로 처리할 수 있는지 확인 필요
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : (
          <span></span>
        ),
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : null,
      }}
      FormHelperTextProps={{
        sx: getHelperTextStyle(success),
      }}
      variant="standard"
      fullWidth
    />
  );
}

export default InputField;

function getHelperText(
  error: boolean | undefined,
  errorHelperText: string | undefined,
  success: boolean | undefined,
  successHelperText: string | undefined
): string {
  if (error && errorHelperText) return errorHelperText;

  if (success && successHelperText) return successHelperText;

  return "";
}

interface IGetInputStyleProps {
  success: boolean | undefined;
  disabled: boolean | undefined;
  inputStyle: SxProps<Theme> | undefined;
}
function getInputStyle({
  success,
  inputStyle,
  disabled,
}: IGetInputStyleProps): SxProps<Theme> | undefined {
  let result = {};
  if (success) {
    _.merge(result, {
      "&::before": { borderBottomColor: "green !important" },
      "&::after": { borderBottomColor: "green !important" },
    });
  }

  if (disabled) {
    _.merge(result, {
      backgroundColor: "rgb(157 153 153 / 40%)",
      p: "5px !important",
    });
  }

  return _.merge(result, inputStyle);
}
function getHelperTextStyle(
  success: boolean | undefined
): SxProps<Theme> | undefined {
  if (success) {
    return {
      color: "green !important",
    };
  }

  return;
}
