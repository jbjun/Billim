// 외부모듈
import { Box, Typography } from "@mui/material";
// 내부모듈
import CharacterImg from "@assets/images/login/Login_billim_character.png";

interface IEmptyProps {
  width?: string;
  height?: string;
  message: string;
}

const Empty = ({ width, height, message }: IEmptyProps) => {
  return (
    <Box
      width={width || "100vw"}
      height={height || "calc(100vh - 171px)"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="0 -16px"
    >
      <img src={CharacterImg} />
      <Typography mt="20px" variant="h6">
        {message}
      </Typography>
    </Box>
  );
};

export default Empty;
