import { Chip } from "@mui/material"
import React, { useState } from "react"
import InputField from "../../components/InputField"

function NickNameInputFieldContainer() {
  const [nickName, setNickName] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNickName(value)
  }
  return (
    <InputField label="닉네임" value={nickName} onChange={onChange} placeholder="거래시 사용할 닉네임을 입력해주세요" required adornment={<Chip label="중복확인" size="small" onClick={() => {}} />} />
  )
}

export default NickNameInputFieldContainer
