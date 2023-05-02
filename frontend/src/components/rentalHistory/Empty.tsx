// 외부모듈
import { Box, Typography } from "@mui/material";
// 내부모듈
import CharacterImg from "@assets/images/login/Login_billim_character.png";

const Empty = () => {
  return (
    <Box
      width="100vw"
      height="calc(100vh - 171px)"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="0 -16px"
    >
      <img src={CharacterImg} />
      <Typography mt="20px" variant="h6">
        비어있습니다 빌림을 적극 이용해보세요.
      </Typography>
    </Box>
  );
};

export default Empty;
