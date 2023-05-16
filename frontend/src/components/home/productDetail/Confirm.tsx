// 외부모듈
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

// 내부모듈
import {
  IBorrower,
  IReservationDate,
} from "@container/home/productDetail/ReservationDialogContainer";
import { differenceInDays, format } from "date-fns";

interface IConfirmProps {
  borrower: IBorrower;
  reservationDate: IReservationDate;
  totalPrice: number;
  price: number;
  handlePrev: () => void;
  handleReservation: () => void;
}

const Confirm = ({
  borrower,
  reservationDate,
  handleReservation,
  totalPrice,
  price,
  handlePrev,
}: IConfirmProps) => {
  const { startDate, endDate } = reservationDate;
  const reservationTerm = differenceInDays(endDate, startDate) + 1;
  const formattedStartDate = format(startDate, "yyyy.MM.dd");
  const formattedEndDate = format(endDate, "yyyy.MM.dd");

  return (
    <Box width="calc(100vw - 32px)">
      <Typography
        component="p"
        m="20px 0"
        variant="t4"
        p="0px 4px"
        lineHeight="160%"
      >
        대여 정보를 확인해 주세요
      </Typography>
      <Stack
        spacing={2.5}
        p="0 4px"
        sx={{
          height: "408.5px",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
          lineHeight: "173%",
          wordBreak: "keep-all",
          ol: {
            paddingInlineStart: "20px",
            fontSize: "14px",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          <Typography variant="h6">대여자</Typography>
          <Typography variant="b5">{borrower.name}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          <Typography variant="h6">대여기간</Typography>
          <Typography variant="b5">{`${reservationTerm}일 (${formattedStartDate}~${formattedEndDate})`}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          <Typography variant="h6">대여금액</Typography>
          <Typography variant="b5">{`${totalPrice.toLocaleString()} (${price}/일 * ${reservationTerm}일)`}</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography
            // sx={{ transform: "translateX(-5px)" }}
            component="p"
            variant="h7"
          >
            ❗️직거래 시 이것만 주의해 주세요
          </Typography>
          <ol>
            <li>
              <Typography component="p" variant="b5">
                대여자를 확인하고 거래해 주세요.
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="b5">
                대여기간이 지난 후에도 반납이 이뤄지지 않는 경우 빌림이 중재할
                수 있습니다. 자세한 내용은 <Link>서비스 이용 약관</Link>을
                참조해 주세요.
              </Typography>
            </li>
            <li>
              <Typography component="p" variant="b5">
                빌림은 안전결제 서비스를 제공하지 않습니다. 대여금액은 꼭 따로
                받아주세요.
              </Typography>
            </li>
          </ol>
        </Box>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button
            onClick={handlePrev}
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "red", m: "16px 0" }}
          >
            <Typography variant="h6">이전</Typography>
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button
            variant="contained"
            fullWidth
            sx={{ m: "16px 0" }}
            onClick={handleReservation}
          >
            <Typography variant="h6">대여예약</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Confirm;
