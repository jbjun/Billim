import React, { useState } from "react";
import InputField from "../InputField";
import { createValidator } from "@lib/utils/validator";
import { IVerifiableInputProps } from "@container/login/RegisterContainer";
import useStateFromProp from "@lib/hooks/useStateFromProp";
// function validateName(value: string): boolean {
//   const pattern = /^([가-힣]+\s)*[가-힣]*$/
//   const validate = pattern.test(value)

//   // 이름 검증
//   return validate
// }
const validateName = createValidator(/^([가-힣]+\s)*[가-힣]*$/);

interface INameInputField extends IVerifiableInputProps {
  disabled?: boolean;
  required?: boolean;
}
function NameInputField({
  id,
  value,
  onVerify,
  disabled,
  required = true,
}: INameInputField) {
  const [error, setError] = useState(false);
  const [name, setName] = useStateFromProp(value || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateName(value)) {
      onVerify({ id, value, verified: true });
      setError(false);
    } else {
      onVerify({ id, value, verified: false });
      setError(true);
    }
    setName(value);
  };

  return (
    <InputField
      label="이름"
      value={name}
      disabled={disabled}
      onChange={onChange}
      placeholder="이름을 입력해 주세요"
      error={error}
      helperText="실명을 입력해 주세요"
      required={required}
    />
  );
}

export default NameInputField;
