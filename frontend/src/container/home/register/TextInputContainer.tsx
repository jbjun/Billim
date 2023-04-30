// 외부모듈
import { TextField } from "@mui/material";
import { UseFormRegisterReturn, UseFormTrigger } from "react-hook-form";

// 내부모듈
import { IProductRegisterState } from "@container/home/register";

const PLACE_HOLDER = `대여상품에 대한 정보를 작성해 주세요.
  
서로 믿고 쓰는 빌림이 되기 위해 꼭 지켜주세요!
  1. 상품에 대해 허위정보를 기재하지 마세요.
  2. 대여료 외 추가비용이 있는 경우 반드시 작성하세요.
  3. 거래할 곳의 위치를 정확하게 작성하세요.
  4. 상품 대여와 무관한 글 작성시 무통보 삭제될 수 있습니다.    
  `;

interface ITextInputContainer {
  trigger: UseFormTrigger<IProductRegisterState>;
  register: UseFormRegisterReturn<"text">;
}

const TextInputContainer = ({ register, trigger }: ITextInputContainer) => {
  return (
    <TextField
      {...register}
      multiline
      variant="standard"
      InputProps={{ disableUnderline: true }}
      placeholder={PLACE_HOLDER}
    />
  );
};

export default TextInputContainer;
