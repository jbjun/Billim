// 외부모듈
import { IconButton, Menu, MenuItem, SvgIcon, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";

// 내부모듈
import { ReactComponent as MoreIcon } from "@assets/icons/more_icon.svg";

const DetailMenuContainer = () => {
  const navigator = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePrivate = () => {
    handleMenuClose();
  };
  const handleDelete = () => {
    handleMenuClose();

    const isConfirm = confirm("정말로 삭제하시겠습니까?");

    if (isConfirm) {
      console.log("삭제로직");
      navigator("/home");
    } else {
      handleMenuClose();
    }
  };

  // TODO 스낵바는 전역관리를 통해 전역에서 보여주는걸로 수정

  return (
    <>
      {/* <Snackbar
        open={true}
        message="삭제가 완료되었습니다."
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      /> */}
      <IconButton sx={{ p: 0 }} onClick={handleIconClick}>
        <SvgIcon component={MoreIcon} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handlePrivate}>
          <Typography variant="b5">비공개로 전환</Typography>
        </MenuItem>
        <MenuItem onClick={handleDelete}>
          <Typography color="red.main" variant="b5">
            삭제하기
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DetailMenuContainer;
