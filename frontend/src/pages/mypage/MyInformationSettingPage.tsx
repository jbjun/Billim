import Header from "@components/layout/Header";
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  SvgIcon,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactComponent as EditIcon } from "@assets/icons/mypage/Edit_icon.svg";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
function MyInformationSettingPage() {
  return (
    <>
      <Header title="내 정보 관리" needBackHistory />
      <Grid container>
        <Grid item xs={12} sx={{ p: 1 }}>
          <UserImageSlot />
        </Grid>
        <InformationDivider />
        <UserInformationSlot title={"회원 정보"}>
          <UserInforamtion title="휴대폰 번호">
            <Typography>010-1234-5678</Typography>
          </UserInforamtion>
          <UserInforamtion title="닉네임">
            <Typography>빌리빌리진</Typography>
          </UserInforamtion>
          <UserInforamtion title="주소">
            <Typography>서울시 광진구 능동</Typography>
          </UserInforamtion>
        </UserInformationSlot>
        <InformationDivider />
        <UserInformationSlot title={"계정 정보"}>
          <UserInforamtion title="이메일 주소">
            <Typography>billim@naver.com</Typography>
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
              <ArrowForwardIosSharpIcon
                sx={{ fontSize: "1.3rem", color: "black" }}
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
function UserImageSlot() {
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
        <Typography variant="h5">빌리진님</Typography>
      </Box>
      <Box sx={{ position: "absolute", top: 0, right: 5 }}>
        <Chip
          size="small"
          label="수정하기"
          variant="outlined"
          deleteIcon={
            <SvgIcon component={EditIcon} inheritViewBox fontSize="large" />
          }
          onClick={() => {}}
          onDelete={() => {}}
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
