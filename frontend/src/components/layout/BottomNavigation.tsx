import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@mui/material";
import { ReactComponent as HomeIcon } from "../../assets/icons/Home_outlined.svg";
// import { ReactComponent as ListIcon } from "../../assets/icons/List_outlined.svg";
// import { ReactComponent as ChatIcon } from "../../assets/icons/Chat_outlined.svg";
// import { ReactComponent as ProfileIcon } from "../../assets/icons/Profile_outlined.svg";
import PersonIcon from "@mui/icons-material/Person";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useState } from "react";

const LabelBottomNavigation = () => {
  const [value, setValue] = useState("home");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="홈"
          value="home"
          icon={<SvgIcon component={HomeIcon} />}
        />
        <BottomNavigationAction
          label="대여 내역"
          value="rentalDetails"
          icon={<SvgIcon component={ListAltIcon} />}
        />
        <BottomNavigationAction
          label="채팅"
          value="nearby"
          icon={<SvgIcon component={QuestionAnswerIcon} />}
        />
        <BottomNavigationAction
          label="내 정보"
          value="myInformation"
          icon={<SvgIcon component={PersonIcon} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default LabelBottomNavigation;
