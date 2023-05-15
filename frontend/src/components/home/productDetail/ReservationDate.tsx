/* eslint-disable @typescript-eslint/ban-ts-comment */
// 외부모듈
import { Typography, Box, styled, useTheme, Grid, Button } from "@mui/material";
import { DateRange } from "react-date-range";
import ko from "date-fns/locale/ko";
import { addMonths, differenceInDays } from "date-fns";

// 내부모듈
import ExpectPrice from "@components/home/productDetail/ExpectPrice";
import { IReservationDate } from "@container/home/productDetail/ReservationDialogContainer";
import { IFirestoreTimestamp } from "@type/firebase";
import { firestoreTimestampToDate } from "@lib/utils/time";

const CalendarStyle = styled(Box)(({ theme }) => ({
  overflow: "scroll",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  height: "372px",
  ".rdrWeekDays .rdrWeekDay:nth-of-type(1)": {
    color: `${theme.palette.red.main} !important`,
  },
  ".rdrDateDisplayWrapper": {
    display: "none",
  },

  ".rdrWeekDay": {
    fontSize: "12px",
    fontWeight: "400",
  },
  ".rdrMonthName": {
    fontSize: "14px",
    fontWeight: "700",
  },
  ".rdrDayStartOfWeek > .rdrDayNumber > span": {
    color: "red",
  },
  ".rdrDayNumber": {
    zIndex: 3,
    fontSize: "12px",
    fontWeight: "700",
  },
  ".rdrMonth": {
    width: "calc(100vw - 32px)",
    padding: "12px 0",
    borderBottom: `1px solid ${theme.palette.text.gray400}`,
  },
  ".rdrDayToday .rdrDayNumber span:after": {
    backgroundColor: theme.palette.primary.main,
  },
  ".rdrDayPassive": {
    visibility: "hidden",
  },
}));

interface IReservationDateProps {
  reservationDate: IReservationDate;
  borrowedDays: IFirestoreTimestamp[];
  totalPrice: number;
  handleNext: () => void;
  handlePrev: () => void;
  handleReservationDate: (reservationDate: IReservationDate) => void;
}

const ReservationDate = ({
  reservationDate,
  borrowedDays,
  handleNext,
  handlePrev,
  handleReservationDate,
  totalPrice,
}: IReservationDateProps) => {
  const theme = useTheme();
  const { startDate, endDate } = reservationDate;
  const isSelected = startDate instanceof Date && endDate instanceof Date;

  // 컨테이너로 이동
  const maxDate = addMonths(new Date(), 3);

  return (
    <>
      <Typography component="p" mt="20px" variant="t4" p="0px 4px">
        대여 기간을 설정해 주세요
      </Typography>
      <CalendarStyle>
        <DateRange
          navigatorRenderer={() => <div style={{ display: "none" }} />}
          monthDisplayFormat="yyyy년 M월"
          months={3}
          date={new Date()}
          locale={ko}
          minDate={new Date()}
          // @ts-ignore
          onChange={(item) => handleReservationDate(item.selection)}
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          ranges={[reservationDate]}
          maxDate={maxDate}
          showDateDisplay={false}
          disabledDates={borrowedDays.map((time) =>
            firestoreTimestampToDate(time)
          )}
          rangeColors={[theme.palette.green.main]}
          preventSnapRefocus={true}
          showPreview={false}
        />
      </CalendarStyle>
      <ExpectPrice totalPrice={totalPrice} />
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
            disabled={!isSelected}
            onClick={handleNext}
            variant="contained"
            fullWidth
            sx={{ m: "16px 0" }}
          >
            <Typography variant="h6">다음</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ReservationDate;
