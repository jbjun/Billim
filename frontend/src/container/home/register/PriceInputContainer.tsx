import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  UseFormRegisterReturn,
  UseFormSetValue,
  FieldValues,
  UseFormTrigger,
  UseFormSetError,
  FieldError,
  UseFormClearErrors,
} from "react-hook-form";

// 내부모듈
import { IProductRegisterState } from "@container/home/register";

interface IPriceInputContainer {
  register: UseFormRegisterReturn<"price">;
  price: number | "";
  setValue: UseFormSetValue<IProductRegisterState>;
  setError: UseFormSetError<IProductRegisterState>;
  error?: FieldError;
  trigger?: UseFormTrigger<FieldValues>;
  clearErrors: UseFormClearErrors<IProductRegisterState>;
}

const MAX_PRICE = 99999999;

const PriceInputContainer = ({
  register,
  setValue,
  price,
  setError,
  error,
  clearErrors,
}: IPriceInputContainer) => {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const isError = !!error;

  useEffect(() => {
    if (price === 0) setChecked(true);
    else setChecked(false);
  }, [price]);

  const handleCheckBox = () => {
    if (!checked) setValue("price", 0);
    else setValue("price", "");
  };

  const handleChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (inputRef.current === null) return;
    const { value } = e.target;

    // 최대 가격 1억을 넘길경우 자동으로 최대 가격으로 설정후 에러문구 보여준 뒤 일정시간 후에 클리어
    if (Number(value) > MAX_PRICE) {
      setValue("price", MAX_PRICE);
      setError("price", {
        message: "최대가격은 99,999,999을 초과할 수 없습니다.",
      });
      setTimeout(() => {
        clearErrors("price");
      }, 2000);
    } else {
      setValue("price", Number(value));
    }
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (inputRef.current === null) return;
    inputRef.current.type = "number";
    inputRef.current.value = "";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (inputRef.current === null) return;
    const { value } = e.target;
    inputRef.current.type = "string";
    inputRef.current.value = Number(value).toLocaleString();
  };

  return (
    <>
      <TextField
        {...register}
        error={isError}
        helperText={error?.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        inputRef={inputRef}
        type="number"
        variant="standard"
        placeholder="대여료"
        InputProps={{
          endAdornment: (
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onClick={handleCheckBox}
                  color="primary"
                  sx={{ "& .MuiSvgIcon-root": { fontSize: "18px" } }}
                />
              }
              label="무료대여"
              sx={{
                "& .MuiFormControlLabel-root": { marginRight: 0 },
                "& .MuiTypography-root": {
                  width: "52px",
                  fontSize: "14px",
                  color: "#666666",
                },
              }}
            />
          ),
        }}
      />
    </>
  );
};

export default PriceInputContainer;
