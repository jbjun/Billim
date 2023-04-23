import React, { useState } from "react";
import InputField from "@components/InputField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Dialog from "@components/layout/Dialog";
import AddressFinderContainer from "./AddressFinderContainer";
import { IVerifiableInputProps } from "../RegisterContainer";

interface IAddressInputFieldContainer {
  id: IVerifiableInputProps["id"];
  onVerify: IVerifiableInputProps["onVerify"];
}
function AddressInputFieldContainer({
  id,
  onVerify,
}: IAddressInputFieldContainer) {
  const [error, setError] = useState(false);
  const [address, setAddress] = useState("");
  const [openAdressDialog, setOpenAdressDialog] = useState(false);

  const onOpenAdressDialog = () => {
    setOpenAdressDialog(true);
  };

  const onClosenAdressDialog = () => {
    setOpenAdressDialog(false);
  };

  const onSelectAddress = (address: string) => {
    setAddress(address);
    onVerify({ id, verified: true, value: address });
    onClosenAdressDialog();
  };
  const onChange = () => {};
  return (
    <>
      <InputField
        label="주소"
        value={address}
        onChange={onChange}
        placeholder="주소를 선택해 주세요"
        error={error}
        helperText="주소를 입력해 주세요"
        required
        endAdornment={
          <IconButton onClick={onOpenAdressDialog} edge="end">
            <SearchIcon />
          </IconButton>
        }
      />
      <Dialog
        title="주소 찾기"
        open={openAdressDialog}
        onClose={onClosenAdressDialog}
      >
        <AddressFinderContainer onSelectAddress={onSelectAddress} />
      </Dialog>
    </>
  );
}

export default AddressInputFieldContainer;
