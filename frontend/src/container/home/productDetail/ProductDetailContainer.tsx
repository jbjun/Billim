// 외부모듈
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

// 내부모듈
import RentalStatusTag from "@components/common/RentStatusTag";
import { ReactComponent as ViewIcon } from "@assets/icons/View_icon.svg";

type ProductDetailContainer = {
  onClick?: () => void;
};

const ProductDetailContainer = ({ onClick }: ProductDetailContainer) => {
  const theme = useTheme();

  return (
    <Container sx={{ pt: "20px" }}>
      <Stack spacing={2.5}>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ width: "36px", height: "36px" }} />
          <Box sx={{ ml: "8px" }}>
            <Typography variant="h7" lineHeight="17px">
              빌리진
            </Typography>
            <Typography
              color="#000000"
              variant="b7"
              component="div"
              lineHeight="14px"
            >
              광진구 자양동
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ float: "left" }} mr="4px">
            <RentalStatusTag status="rentable" bold />
          </Box>
          <Typography variant="h6" lineHeight="19px">
            캐논 EOS 200D 카메라 S급 대여합니다.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            color={theme.palette.text.gray700}
            mt="8px"
          >
            <Typography variant="b5" mr="8px">
              IT/가전/디저털기기
            </Typography>
            <ViewIcon />
            <Typography variant="b5" ml="2px">
              150
            </Typography>
          </Box>
        </Box>
        <Box display="flex">
          <Typography variant="h6" mr="4px">
            70,000원
          </Typography>
          <Typography variant="b4"> /일</Typography>
        </Box>
        <Divider />
        <Typography whiteSpace="pre-line">
          {`
            카메라 대여합니다! \n\n\n 캐논 시리즈 신상품이라 상태 매우 깨끗합니다.\n\n구성품은 카메라, 케이스, 스트랩입니다. 렌즈 추가 필요하시면 20,000원 추가되는 점 참고 부탁 드립니다.\n\n 자연스러운 흠집 외 고의적인 손상, 분실을 방지하고자 신분증 사본을 받고 있으니 너른 양해 부탁 드립니다.\n\n (미성년자는 번거로우시더라도 법적 보호자의 동의서를 함께 첨부해주셔야 대여 가능합니다)\n\n 장소는 자양초등학교 정문 앞에서 가능하며, 불가피 하신 경우는 스타시티까지는 가능할 듯 합니다.`}
        </Typography>
      </Stack>
      <Box sx={{ width: "100%" }} p="16px 0">
        <Button sx={{ width: "100%" }} variant="contained" onClick={onClick}>
          <Typography variant="h6">대여예약</Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default ProductDetailContainer;
