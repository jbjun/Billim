// 외부모듈

// 외부모듈
import {
  Box,
  Button,
  ButtonBase,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 내부모듈
import Dialog from "@components/layout/Dialog";
import { Container } from "@mui/system";
import { useNavigate } from "react-router";

const MenuBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "53px",
}));

const LogoutContainer = () => {
  const navigator = useNavigate();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const hanleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleLogout = () => {
    // 로그아웃 로직
    navigator("/home");
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose}>
        <Container
          sx={{
            p: "20px 16px",
          }}
        >
          <Typography component="p" variant="b5" mb="20px">
            로그아웃 하시겠습니까?
          </Typography>
          <Box>
            <ButtonBase
              onClick={handleClose}
              sx={{
                width: "135px",
                height: "40px",
                borderRadius: "4px",
                backgroundColor: theme.palette.primary[50],
                mr: "8px",
              }}
            >
              <Typography variant="h6" color={theme.palette.primary.main}>
                취소
              </Typography>
            </ButtonBase>
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{
                width: "135px",
                height: "40px",
              }}
            >
              <Typography variant="h6" color="#fff">
                로그아웃
              </Typography>
            </Button>
          </Box>
        </Container>
      </Dialog>
      <MenuBox onClick={hanleOpen}>
        <Typography variant="t3">로그아웃</Typography>
        <ArrowForwardIosIcon />
      </MenuBox>
    </>
  );
};

export default LogoutContainer;
