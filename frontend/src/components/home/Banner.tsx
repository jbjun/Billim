// 외부모듈
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

// 내부모듈
import BillimCharacter from "@assets/images/Billim_main.png";

// TODO 닉네임 변경
const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ background: theme.palette.primary.main }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pb="25px"
    >
      <Box px="17px">
        <Typography
          color={theme.palette.text.white}
          mb="9px"
          variant="h5"
          sx={{ wordBreak: "keep-all" }}
        >
          빌리진님, 안녕하세요👋
        </Typography>
        <Typography color={theme.palette.text.white} variant="h5">
          오늘은 무엇을 빌려볼까요?
        </Typography>
      </Box>
      <Box sx={{ transform: "translateY(25px)" }}>
        <img src={BillimCharacter} alt="character" />
      </Box>
    </Box>
  );
};

export default React.memo(Banner);
