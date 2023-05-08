// 외부모듈
import { Box, IconButton } from "@mui/material";

// 내부모듈
import { ReactComponent as HmbIcon } from "@assets/icons/btn_hmb.svg";
import { useNavigate } from "react-router";
import { CATEGORY_PATH } from "@routes/index";

const HeaderHomeMenu = () => {
  const navigator = useNavigate();
  const handleClick = () => navigator(CATEGORY_PATH);
  return (
    <>
      <Box height="100%" display="flex" justifyContent="flex-end">
        <IconButton onClick={handleClick} sx={{ p: 0 }}>
          <HmbIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default HeaderHomeMenu;
