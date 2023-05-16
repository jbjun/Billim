// 내부모듈
import {
  Avatar,
  Box,
  Container,
  Divider,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 내부모듈
import {
  FAQ_PATH,
  My_INFORMATION_SETTING_PATH,
  NOTICE_PATH,
} from "@routes/myPage";
import LogoutContainer from "@container/mypage/LogoutContainer";

const MenuBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "53px",
}));

const MyPage = () => {
  return (
    <Box
      sx={{
        a: { color: "black", textDecoration: "none" },
      }}
    >
      <Box height="248px" bgcolor="primary.main" lineHeight="normal">
        <Container>
          <Box height="48px" display="flex" alignItems="center" pt="15px">
            <Typography variant="h4" color="#fff">
              마이 페이지
            </Typography>
          </Box>
          <Box display="flex" mt="32px" alignItems="center">
            <Avatar
              src="https://mblogthumb-phinf.pstatic.net/20160314_228/yujoki76_14579375350429kG1w_JPEG/11005211_1674504386110312_829632223_n.jpg?type=w2"
              sx={{ width: "100px", height: "100px" }}
            />
            <Box ml="16px">
              <Typography
                variant="h5"
                color="#fff"
                sx={{ wordBreak: "keep-all" }}
              >
                빌리진 님, 안녕하세요👋
              </Typography>
              <Box
                mt="8px"
                border="1px solid #fff"
                height="26px"
                display="flex"
                borderRadius="4px"
                justifyContent="center"
                alignItems="center"
                width="219px"
              >
                <Link to={`/${My_INFORMATION_SETTING_PATH}`}>
                  <Typography variant="h8" color="#fff">
                    내 정보 관리
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        pt="60px"
        bgcolor="white"
        borderRadius="24px 24px 0 0"
        sx={{
          transform: "translateY(-20px)",
        }}
      >
        <Container>
          <Link to={`/${NOTICE_PATH}`}>
            <MenuBox>
              <Typography component="p" variant="t3">
                공지사항
              </Typography>
              <ArrowForwardIosIcon />
            </MenuBox>
          </Link>
          <Divider />
          <Link to={`/${FAQ_PATH}`}>
            <MenuBox>
              <Typography variant="t3">FAQ</Typography>
              <ArrowForwardIosIcon />
            </MenuBox>
          </Link>
          <Divider />
          <LogoutContainer />
          <Divider />
        </Container>
      </Box>
    </Box>
  );
};

export default MyPage;
