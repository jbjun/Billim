// 외부모듈
import { useState } from "react";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";

// 내부모듈
import { ReactComponent as OHomeIcon } from "@assets/icons/Home_outlined.svg";
import { ReactComponent as FHomeIcon } from "@assets/icons/Home_filled.svg";
import { ReactComponent as OListIcon } from "@assets/icons/List_outlined.svg";
import { ReactComponent as FListIcon } from "@assets/icons/List_fiiled.svg";
import { ReactComponent as OChatIcon } from "@assets/icons/Chat_outlined.svg";
import { ReactComponent as FChatIcon } from "@assets/icons/Chat_filled.svg";
import { ReactComponent as OProfileIcon } from "@assets/icons/Profile_outlined.svg";
import { ReactComponent as FProfileIcon } from "@assets/icons/Profile_filled.svg";
import {
  CHAT_LIST_PATH,
  RENTAL_HISTORY_PATH,
  HOME_PATH,
  MY_PATH,
} from "routes";

const LabelBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [value, setValue] = useState(location.pathname);
  const handleChange = (_: React.SyntheticEvent, path: string) => {
    if (location.pathname === path) return;
    navigate(path);
    setValue(path);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="홈"
          value={HOME_PATH}
          icon={
            pathname === HOME_PATH ? (
              <SvgIcon component={FHomeIcon} />
            ) : (
              <SvgIcon component={OHomeIcon} />
            )
          }
        />
        <BottomNavigationAction
          label="대여 내역"
          value={RENTAL_HISTORY_PATH}
          icon={
            pathname === RENTAL_HISTORY_PATH ? (
              <SvgIcon component={FListIcon} />
            ) : (
              <SvgIcon component={OListIcon} />
            )
          }
        />
        <BottomNavigationAction
          label="채팅"
          value={CHAT_LIST_PATH}
          icon={
            pathname === CHAT_LIST_PATH ? (
              <SvgIcon component={FChatIcon} />
            ) : (
              <SvgIcon component={OChatIcon} />
            )
          }
        />
        <BottomNavigationAction
          label="내 정보"
          value={MY_PATH}
          icon={
            pathname === MY_PATH ? (
              <SvgIcon component={FProfileIcon} />
            ) : (
              <SvgIcon component={OProfileIcon} />
            )
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default LabelBottomNavigation;
