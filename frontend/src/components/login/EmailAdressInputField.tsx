import InputField from "@components/InputField";
import { SvgIcon } from "@mui/material";
import { IVerifiableInputProps } from "@container/login/RegisterContainer";
import { ReactComponent as NaverCircleIcon } from "@assets/icons/login/Naver_circle_icon.svg";
interface IEmailInputField {
  value: IVerifiableInputProps["value"];
}
function EmailAdressInputField({ value = "" }: IEmailInputField) {
  return (
    <InputField
      disabled
      required
      label={"이메일"}
      value={value}
      startAdornment={<SvgIcon component={NaverCircleIcon} inheritViewBox />}
    />
  );
}

export default EmailAdressInputField;
