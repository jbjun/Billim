// 외부모듈
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomeTerms = () => {
  return (
    <>
      <Box
        lineHeight="normal"
        bgcolor="#F2F2F2"
        py="38px"
        px="20px"
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
          <Typography mx="4px" fontSize="10px">
            |
          </Typography>
          <Link to="/terms/personal_information_processing_policy">
            <Typography variant="b7">개인정보 처리 방침</Typography>
          </Link>
          <Typography mx="4px" fontSize="10px">
            |
          </Typography>
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
