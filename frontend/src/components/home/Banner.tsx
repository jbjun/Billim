// 외부모듈
import { Box, Typography, useTheme } from "@mui/material";

// 내부모듈
import BillimCharacter from "@assets/images/Billim_main.png";

const Banner = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ background: theme.palette.primary.main }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box p={2}>
        <Typography
          color={theme.palette.text.white}
          variant="h5"
          sx={{ mb: 1 }}
        >
          빌리진님, 안녕하세요👋
        </Typography>
        <Typography color={theme.palette.text.white} variant="h5">
          오늘은 무엇을 빌려볼까요?
        </Typography>
      </Box>
      <Box>
        <img src={BillimCharacter} alt="character" />
      </Box>
    </Box>
  );
};

export default Banner;
