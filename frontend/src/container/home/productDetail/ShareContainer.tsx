// 외부모듈
import { IconButton, SvgIcon } from "@mui/material";

// 내부모듈
import { ReactComponent as ShareIcon } from "@assets/icons/share_icon.svg";

const ShareContainer = () => {
  return (
    <>
      <IconButton sx={{ p: 0 }}>
        <SvgIcon component={ShareIcon} />
      </IconButton>
    </>
  );
};

export default ShareContainer;
