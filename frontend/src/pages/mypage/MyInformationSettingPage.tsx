import Header from "@components/layout/Header";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ReactComponent as EditIcon } from "@assets/icons/mypage/Edit_icon.svg";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { useUserInfo } from "@lib/hooks/query/loginQuery";
import { useNavigate } from "react-router";
import { USER_SETTING_PATH } from "@routes/myPage";
import BillimConfirm from "@components/common/BillimConfirm";
import { deleteUser } from "@lib/api/userApi";
import { LOGIN_PATH } from "@routes/login";
function MyInformationSettingPage() {
  const userInfo = useUserInfo();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onDeleteUser = async () => {
    if (!userInfo?.name) {
      throw new Error("회원 탈퇴 중 문제가 발생하였습니다.");
    }

    await deleteUser({ name: userInfo.name });
    navigate(`/${LOGIN_PATH}`);
  };
  if (!userInfo) return null;
  return (
    <>
      <Header title="내 정보 관리" needBackHistory />
      <Grid container>
        <Grid item xs={12} sx={{ p: 1 }}>
          <UserImageSlot username={userInfo.name} />
        </Grid>
        <InformationDivider />
        <UserInformationSlot title={"회원 정보"}>
          <UserInforamtion title="휴대폰 번호">
            <Typography>{userInfo.number}</Typography>
          </UserInforamtion>
          <UserInforamtion title="닉네임">
            <Typography>{userInfo.nickName}</Typography>
          </UserInforamtion>
          <UserInforamtion title="주소">
            <Typography>{userInfo.juso}</Typography>
          </UserInforamtion>
        </UserInformationSlot>
        <InformationDivider />
        <UserInformationSlot title={"계정 정보"}>
          <UserInforamtion title="이메일 주소">
            <Typography>{userInfo.email}</Typography>
          </UserInforamtion>
        </UserInformationSlot>
        <InformationDivider />
        <UserInformationSlot title={"마케팅 수신 동의"}>
          <UserInforamtion title="이메일 수신 동의">
            <Switch checked={true} onChange={() => {}} />
          </UserInforamtion>
          <UserInforamtion title="문자메시지 수신 동의">
            <Switch checked={false} onChange={() => {}} />
          </UserInforamtion>
        </UserInformationSlot>
        <InformationDivider />
        <Grid item xs={12} sx={{ p: 2 }}>
          <Grid container justifyContent={"space-between"} sx={{ py: 1 }}>
            <Grid item>
              <Typography variant="h6">회원 탈퇴</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={onOpen}>
                <ArrowForwardIosSharpIcon
                  sx={{ fontSize: "1.3rem", color: "black" }}
                />
              </IconButton>
              <BillimConfirm
                open={open}
                title="회원 탈퇴를 하시겠습니까?"
                confirmMessage="회원 탈퇴"
                onConfirm={onDeleteUser}
                onCancle={onClose}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyInformationSettingPage;

function InformationDivider() {
  return <Grid item xs={12} sx={{ backgroundColor: "#E9ECEF", p: 1 }} />;
}

interface IUserInformationSlotProps {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}
function UserInformationSlot({ title, children }: IUserInformationSlotProps) {
  return (
    <Grid item xs={12} sx={{ p: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">{title}</Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginY: 2 }}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}

interface IUserImageSlotProps {
  username: string;
}
function UserImageSlot({ username }: IUserImageSlotProps) {
  const navigate = useNavigate();

  const onEdit = () => {
    navigate(`/${USER_SETTING_PATH}`);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "70%",
          overflow: "hidden",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          src={
            "https://image.shutterstock.com/image-photo/osaka-japan-jun e-24-2017-600w-669537982.jpg"
          }
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center", mt: 1 }}>
        <Typography variant="h5">{username}님</Typography>
      </Box>
      <Box sx={{ position: "absolute", top: 0, right: 5 }}>
        <Chip
          size="small"
          label="수정하기"
          variant="outlined"
          deleteIcon={
            <IconButton onClick={onEdit} size="small">
              <SvgIcon component={EditIcon} inheritViewBox fontSize="small" />
            </IconButton>
          }
          onClick={onEdit}
          onDelete={onEdit}
        />
      </Box>
    </Box>
  );
}

interface IUserInformationProps {
  title: string;
  children: React.ReactElement;
}
function UserInforamtion({ title, children }: IUserInformationProps) {
  return (
    <Grid container justifyContent={"space-between"} sx={{ py: 1 }}>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
}
