import InputField from "@components/InputField";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import _ from "lodash";

interface ICheckedInfo {
  label: string;
  id: string;
  checked: boolean;
  required: boolean;
}
function isAllRequiredChecked(checkedList: ICheckedInfo[]) {
  return checkedList
    .filter((checkedInfo) => checkedInfo.required)
    .every((checkedInfo) => checkedInfo.checked);
}

function isAllChecked(checkedList: ICheckedInfo[]) {
  return checkedList.every((checkedInfo) => checkedInfo.checked);
}
const initialCheckedList: ICheckedInfo[] = [
  {
    label: "서비스 이용 약관 (필수)",
    id: "service",
    checked: false,
    required: true,
  },
  {
    label: "개인정보 수집 및 이용 동의 (필수)",
    id: "personal",
    checked: false,
    required: true,
  },
  {
    label: "위치정보 이용약관 (필수)",
    id: "location",
    checked: false,
    required: true,
  },
  {
    label: "만 14세 이상 동의 (필수)",
    id: "age",
    checked: false,
    required: true,
  },
  {
    label: "마케팅 정보 수신 동의 (선택)",
    id: "marketing",
    checked: false,
    required: false,
  },
];
function NaverConnectionContainer() {
  const [email, setEmail] = useState("");
  const [checkedList, setCheckedList] =
    useState<ICheckedInfo[]>(initialCheckedList);
  const [allChecked, setAllChecked] = useState(isAllChecked(checkedList));
  const isRegistable = useMemo(
    () => isAllRequiredChecked(checkedList),
    [checkedList]
  );

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
  const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetId = e.target.id;
    const checked = e.target.checked;
    const newCheckedList = checkedList.map((checkedInfo) =>
      checkedInfo.id === targetId
        ? { ...checkedInfo, checked: checked }
        : checkedInfo
    );
    isAllChecked(newCheckedList) ? setAllChecked(true) : setAllChecked(false);
    setCheckedList(newCheckedList);
  };

  const onAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const newCheckedList = checkedList.map((checkedInfo) => ({
      ...checkedInfo,
      checked: checked,
    }));
    setAllChecked(checked);
    setCheckedList(newCheckedList);
  };

  return (
    <Grid
      container
      sx={{ p: 2 }}
      spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <InputField
          label="이메일(필수)"
          required
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일을 입력해 주세요"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          value="all"
          control={
            <Checkbox checked={allChecked} onChange={onAllCheckedChange} />
          }
          label="빌림 약관 모두 동의"
          labelPlacement="end"
        />
        {checkedList.map(({ id, label, checked }) => {
          return (
            <DescriptionCheckbox
              key={id}
              id={id}
              label={label}
              checked={checked}
              onChange={onChangeChecked}
              onNavigateToDescription={() => {}}
            />
          );
        })}
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
          }}
          disabled={!isRegistable}
        >
          가입하기
        </Button>
      </Grid>
    </Grid>
  );
}

export default NaverConnectionContainer;

interface IDescriptionCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: any;
  onNavigateToDescription: any;
}
function DescriptionCheckbox({
  id,
  label,
  checked,
  onChange,
  onNavigateToDescription,
}: IDescriptionCheckboxProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <FormControlLabel
          value="all"
          control={
            <Checkbox
              id={id}
              checked={checked}
              icon={<CheckIcon color="action" />}
              checkedIcon={<CheckIcon sx={{ color: "purple" }} />}
              onChange={onChange}
            />
          }
          label={label}
          labelPlacement="end"
        />
      </Grid>
      <Grid item>
        <IconButton size="large" onClick={onNavigateToDescription}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

function Banner() {
  const dot = {
    display: "inline-block",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    verticalAlign: "middle",
    backgroundColor: "grey",
    ml: 1,
  };
  return (
    <>
      <Grid
        container
        sx={{ textAlign: "center" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "2rem",
              color: "#7360FF",
              fontWeight: 700,
              lineHeight: "25px",
              verticalAlign: "middle",
            }}
            component={"span"}
          >
            빌림
          </Typography>
          <Box sx={dot} component={"span"}></Box>
          <Box sx={dot} component={"span"}></Box>
          <Box sx={dot} component={"span"}></Box>
          <Typography
            sx={{
              ml: 1,
              fontSize: "2rem",
              color: "#03C75A",
              fontWeight: 700,
              lineHeight: "25px",
              verticalAlign: "middle",
            }}
            component={"span"}
          >
            네이버
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            sx={{
              fontSize: "20px",
              lineHeight: "24px",
              fontWeight: 700,
              mt: 2,
            }}
          >
            소셜 계정으로 로그인합니다
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            sx={{
              fontSize: "12px",
              lineHeight: "14px",
              fontWeight: 400,
              mt: 2,
            }}
          >
            이메일 주소 입력과 약관동의를 하시면{<br />} 빌림 회원으로 가입
            됩니다.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
