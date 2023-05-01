// 외부모듈
import { Box, SvgIcon, Typography } from "@mui/material";

// 내부모듈
import { ReactComponent as LocationIcon } from "@assets/icons/location.svg";
import { ReactComponent as LocationWhiteIcon } from "@assets/icons/location_white.svg";

const HeaderLocationTitle = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%">
    <SvgIcon component={LocationWhiteIcon}></SvgIcon>
    <Typography
      sx={{ transform: "translateY(2px)" }}
      ml="5px"
      variant="h6"
      component="p"
      color="#fff"
    >
      광진구 자양동
    </Typography>
  </Box>
);

export default HeaderLocationTitle;
