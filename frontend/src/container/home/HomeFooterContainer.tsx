// 외부모듈
import { Box, SvgIcon, Typography } from "@mui/material";

// 내부모듈
import { ReactComponent as DividerIcon } from "@assets/icons/Hdivider.svg";
import { Link } from "react-router-dom";

const HomeTerms = () => {
  return (
    <>
      <Box
        lineHeight="normal"
        bgcolor="#F2F2F2"
        p="38px"
        color="#666666"
        sx={{
          a: {
            textDecoration: "none",
            color: "#666666",
            display: "flex",
          },
        }}
      >
        <Box display="flex" justifyContent="center">
          <Link to="/terms/service">
            <Typography variant="b7">서비스 이용약관</Typography>
          </Link>
          <Box mx="4px">
            <DividerIcon />
          </Box>
          <Link to="/terms/personal_information_processing_policy">
            <Typography variant="b7">개인정보 처리 방침</Typography>
          </Link>
          <Box mx="4px">
            <DividerIcon />
          </Box>
          <Link to="/terms/location">
            <Typography variant="b7">위치정보 이용 약관</Typography>
          </Link>
        </Box>
        <Box textAlign="center" mt="12px">
          <Typography variant="h8">Team 퍼스트클래스</Typography>
        </Box>
      </Box>
    </>
  );
};

export default HomeTerms;
