import React, { useState } from "react"
import InputField from "../InputField"
import { createValidator } from "../../utils/validator"
// function validateName(value: string): boolean {
//   const pattern = /^([가-힣]+\s)*[가-힣]*$/
//   const validate = pattern.test(value)

//   // 이름 검증
//   return validate
// }
const validateName = createValidator(/^([가-힣]+\s)*[가-힣]*$/)
function NameInputField({}) {
  const [error, setError] = useState(false)
  const [name, setName] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (validateName(value)) {
      setError(false)
    } else {
      setError(true)
    }
    setName(value)
  }

  return <InputField label="이름" value={name} onChange={onChange} placeholder="이름을 입력해 주세요" error={error} helperText="실명을 입력해 주세요" required />
}

export default NameInputField
