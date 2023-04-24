// 외부모듈
import { useState } from "react";
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

// 내부모듈
import { ReactComponent as HomeIcon } from "../assets/icons/Home_outlined.svg";
import { CHAT_LIST_PATH } from "routes";

// import { ReactComponent as ListIcon } from "../../assets/icons/List_outlined.svg";
// import { ReactComponent as ChatIcon } from "../../assets/icons/Chat_outlined.svg";
// import { ReactComponent as ProfileIcon } from "../../assets/icons/Profile_outlined.svg";

const LabelBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const handleChange = (event: React.SyntheticEvent, path: string) => {
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
          value="/home"
          icon={<SvgIcon component={HomeIcon} />}
        />
        <BottomNavigationAction
          label="대여 내역"
          value="/rentalList"
          icon={<SvgIcon component={ListAltIcon} />}
        />
        <BottomNavigationAction
          label="채팅"
          value={`/${CHAT_LIST_PATH}`}
          icon={<SvgIcon component={QuestionAnswerIcon} />}
        />
        <BottomNavigationAction
          label="내 정보"
          value="/my"
          icon={<SvgIcon component={PersonIcon} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default LabelBottomNavigation;
