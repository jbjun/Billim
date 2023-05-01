// 외부모듈
import { Box, Drawer, IconButton, SvgIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

// 내부모듈
import { ReactComponent as HmbIcon } from "@assets/icons/btn_hmb.svg";

const HeaderHomeMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width="50vw"></Box>
      </Drawer>
      <Box height="100%" display="flex" justifyContent="flex-end">
        <IconButton onClick={() => setOpen(true)} sx={{ p: 0 }}>
          <HmbIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default HeaderHomeMenu;
