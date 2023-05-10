// 외부모듈
import { Box, Typography } from "@mui/material";

// 내부모듈
import Character from "@assets/images/Intro_billim_character.png";

const DesktopPage = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={Character} />
      <Typography variant="h3">
        PC버전은 준비중입니다. 빠른시일에 만나요!!
      </Typography>
    </Box>
  );
};

export default DesktopPage;
