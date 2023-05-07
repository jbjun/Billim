import React, { useState, useMemo, useLayoutEffect } from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";
import { produce } from "immer";
import NameInputField from "@components/login/NameInputField";
import EmailAdressInputField from "@components/login/EmailAdressInputField";
import { useUserInfo } from "@lib/hooks/query/loginQuery";
import { updateUserInfo, uploadImage } from "@lib/api/loginApi";
import { useNavigate } from "react-router";
import { HOME_PATH } from "@routes/index";
import PageLayout from "@components/layout/PageLayout";
import Header from "@components/layout/Header";
import useUpdateUser from "@lib/hooks/useUpdateUser";
import PhoneNumberInputFieldContainer from "@container/login/input/PhoneNumberInputFieldContainer";
import AddressInputFieldContainer from "@container/login/input/AddressInputFieldContainer";
import NickNameInputFieldContainer from "@container/login/input/NickNameInputFieldContainer";
import InputField from "@components/InputField";
import { My_INFORMATION_SETTING_PATH } from "@routes/myPage";

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
            {/* <ProfileImageEdit
              src={
                "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg"
              }
              onFileChange={handleFileInput}
            /> */}
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

// const Root = styled("div")({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// });

// const Preview = styled("div")(({ theme }) => ({
//   width: 200,
//   height: 200,
//   borderRadius: "50%",
//   overflow: "hidden",
//   marginBottom: theme.spacing(1),
// }));

// const PreviewImage = styled("img")({
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
// });

// const Upload = styled("div")(({ theme }) => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor: "grey",
//   width: 40,
//   height: 40,
//   borderRadius: "50%",
//   cursor: "pointer",
//   "&:hover": {
//     backgroundColor: "grey",
//   },
// }));

// const UploadLabel = styled("label")({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontSize: "1.5rem",
//   color: "#777",
// });

// const UploadIcon = styled(PhotoCamera)({
//   margin: 0,
// });

// interface ProfileImageEditProps {
//   src: string;
//   onFileChange: any;
// }

// const ProfileImageEdit: React.FC<ProfileImageEditProps> = ({
//   src,
//   onFileChange,
// }) => {
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setLoading(true);
//     try {
//       const file = event.target.files?.[0];
//       if (file) {
//         onFileChange(file);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Grid container direction="column" alignItems="center" spacing={1}>
//       <Grid item>
//         <Preview>
//           <PreviewImage src={src} alt="Profile image preview" />
//         </Preview>
//       </Grid>
//       <Grid item>
//         <Upload>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             disabled={loading}
//             style={{ display: "none" }}
//           />
//           <UploadLabel htmlFor="profile-image-upload">
//             <IconButton component="span" disabled={loading}>
//               <UploadIcon />
//             </IconButton>
//           </UploadLabel>
//           {loading && <CircularProgress size={24} />}
//         </Upload>
//       </Grid>
//     </Grid>
//   );
// };
// interface IUserImageSlot {
//   handleFileInput: any;
// }
// function UserImageSlot({ handleFileInput }: IUserImageSlot) {
//   return (
//     <>
//       <Grid container justifyContent={"center"} alignItems={"center"}>
//         <Grid item></Grid>
//         <Box
//           sx={{
//             width: "100px",
//             height: "100px",
//             borderRadius: "70%",
//             overflow: "hidden",
//           }}
//         >
//           <img
//             src={""}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           />
//         </Box>
//       </Grid>
//     </>
//   );
// }
