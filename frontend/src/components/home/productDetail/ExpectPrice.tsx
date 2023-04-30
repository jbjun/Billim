// 외부모듈
import Odometer from "@components/common/Odometer";
import { Box, Typography } from "@mui/material";

interface IExpectPriceProps {
  totalPrice: number;
}

const ExpectPrice = ({ totalPrice }: IExpectPriceProps) => {
  return (
    <Box margin="0 -16px" height="48px" bgcolor="#F3F7FA" mt="10px">
      <Box
        p="0 16px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="48px"
      >
        <Typography variant="h7">예상금액</Typography>
        <Typography variant="h7">
          <Odometer digits={totalPrice} />
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpectPrice;
