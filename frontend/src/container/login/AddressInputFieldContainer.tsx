import { Chip } from "@mui/material"
import React, { useState } from "react"
import InputField from "../../components/InputField"
import SearchIcon from "@mui/icons-material/Search"
import IconButton from "@mui/material/IconButton"

function AddressInputFieldContainer() {
  const [error, setError] = useState(false)
  const [address, setAddress] = useState("")

  const onChange = () => {}
  return (
    <InputField
      label="주소"
      value={address}
      onChange={onChange}
      placeholder="주소를 선택해 주세요"
      error={error}
      helperText="주소를 입력해 주세요"
      required
      adornment={
        <IconButton onClick={() => {}} edge="end">
          <SearchIcon />
        </IconButton>
      }
    />
  )
}

export default AddressInputFieldContainer
