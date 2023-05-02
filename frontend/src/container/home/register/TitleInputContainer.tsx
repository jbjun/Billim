// 외부모듈
import { TextField } from "@mui/material";
import {
  UseFormRegisterReturn,
  FieldError,
  UseFormTrigger,
} from "react-hook-form";

// 내부모듈
import { IProductRegisterState } from "@container/home/register";

interface ITitleInputContainer {
  trigger: UseFormTrigger<IProductRegisterState>;
  register: UseFormRegisterReturn<"title">;
  error?: FieldError;
}

const TitleInputContainer = ({
  trigger,
  register,
  error,
}: ITitleInputContainer) => {
  const isError = !!error;

  return (
    <TextField
      error={isError}
      helperText={error?.message}
      inputRef={register.ref}
      {...register}
      onChange={(e) => {
        register.onChange(e);
        trigger("title");
      }}
      variant="standard"
      placeholder="제목"
    />
  );
};

export default TitleInputContainer;
