import React, { useState, useMemo } from "react";
import { Button, Grid } from "@mui/material";
import NameInputField from "@components/login/NameInputField";
import { uploadImage } from "@lib/api/userApi";
import { useNavigate } from "react-router";
import PageLayout from "@components/layout/PageLayout";
import Header from "@components/layout/Header";
import useUpdateUser from "@lib/hooks/useUpdateUser";
import NickNameInputFieldContainer from "@container/login/input/NickNameInputFieldContainer";
import InputField from "@components/InputField";
import { My_INFORMATION_SETTING_PATH } from "@routes/myPage";
import ProfileImageEdit from "@components/login/ProfileImage";
import AddressInputFieldContainer from "@container/login/input/AddressInputFieldContainer";
import { BASE_API_PATH } from "@lib/api";

function UpdateUserContainer() {
  const navigate = useNavigate();
  const { userForm, onChangeUserForm, onUpdateUser } = useUpdateUser({
    isRegister: false,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImageFile(file);
  };

  if (!userForm) {
    return null;
  }

  const onUpdate = () => {
    // 이미지 업로드
    if (imageFile !== null) {
      const formData = new FormData();
      formData.append("file", imageFile);
      uploadImage({ data: imageFile });
    }

    // user info 업데이트
    onUpdateUser();
    navigate(`/${My_INFORMATION_SETTING_PATH}`);
  };
  const isUpdatable = useMemo(() => {
    return Object.values(userForm).every((info) => info.verified);
  }, [userForm]);

  return (
    <PageLayout
      header={<Header title="회원정보 수정" needBackHistory />}
      body={
        <Grid
          container
          sx={{ p: 2 }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <ProfileImageEdit
              src={userForm.profile.value}
              onFileChange={handleFileInput}
            />
            <form
              action={`${BASE_API_PATH}/user/images?id=1`}
              method="post"
              encType="multipart/form-data"
            >
              <input type="file" name="file" />
              <input type="hidden" name="id" value="1" />

              <button type="submit" className="btn btn-dark">
                업로드
              </button>
            </form>

            <div>
              <img
                src="/user/image/1qd5VopAZElQVbm7VlWeksjL1cAHZPps.png"
                style={{ width: "300px", height: "auto" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <NameInputField
              id="username"
              onVerify={onChangeUserForm}
              value={userForm.username.value}
              required={false}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              disabled
              label={"이메일"}
              value={userForm.email.value}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              disabled
              label={"휴대폰 번호"}
              value={userForm.phoneNumber.value}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressInputFieldContainer
              id="address"
              onVerify={onChangeUserForm}
              value={userForm.address.value}
              required={false}
            />
          </Grid>
          <Grid item xs={12}>
            <NickNameInputFieldContainer
              id="nickname"
              onVerify={onChangeUserForm}
              value={userForm.nickname.value}
              required={false}
            />
          </Grid>
        </Grid>
      }
      footer={
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
          disabled={!isUpdatable}
          onClick={onUpdate}
          fullWidth
        >
          확인
        </Button>
      }
    />
  );
}

export default UpdateUserContainer;
