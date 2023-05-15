// 외부모듈
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { isSameDay } from "date-fns";

// 내부모듈
import { RentStatusType } from "@type/product";
import Dialog from "@components/layout/Dialog";
import { uesUpdateRentalStatus } from "@lib/hooks/query/reservation";
import { IFirestoreTimestamp } from "@type/firebase";
import { firestoreTimestampToDate } from "@lib/utils/time";

interface IHistoryButtonProps {
  id: string;
  productId: string;
  reservationDate: {
    startDate: IFirestoreTimestamp;
    endDate: IFirestoreTimestamp;
    key: string;
  };
  status: RentStatusType;
}

interface IContents {
  dialogText: string;
  confirmBtnText: string;
  btnType: "" | "reservationCancelled" | "returnDelay" | "returned";
}

const HistoryButton = ({
  status,
  id,
  productId,
  reservationDate,
}: IHistoryButtonProps) => {
  const theme = useTheme();
  const { mutate: updateRentalStatus } = uesUpdateRentalStatus();
  const [open, setOpen] = useState(false);
  const [contents, setContents] = useState<IContents>({
    dialogText: "",
    confirmBtnText: "",
    btnType: "",
  });

  const handleOpen = (contents: IContents) => {
    setContents({ ...contents });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleButtonClick = (comtents: IContents) => {
    handleOpen(comtents);
  };

  const handleConfirm = () => {
    if (contents.btnType === "") return;
    updateRentalStatus({ id, productId, status: contents.btnType });
    handleClose();
  };

  const isReturnToday = isSameDay(
    firestoreTimestampToDate(reservationDate.endDate),
    new Date()
  );

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box borderRadius="12px" p="20px 16px" width="279px">
          <Typography variant="b5">{contents.dialogText}</Typography>
          <Grid container spacing={1} mt="10px">
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: `${theme.palette.primary[50]} !important`,
                }}
                onClick={handleClose}
              >
                <Typography variant="h6" color={theme.palette.primary[700]}>
                  취소
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth onClick={handleConfirm}>
                <Typography variant="h6">{contents.confirmBtnText}</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
      <Grid container spacing={1} mt="8px">
        {(status === "renting" || status === "returnDelay") && (
          <>
            <Grid item xs={6}>
              <Button
                disabled={status === "returnDelay" || !isReturnToday}
                variant="outlined"
                size="small"
                fullWidth
                onClick={() =>
                  handleButtonClick({
                    btnType: "returnDelay",
                    dialogText: "반납지연 처리 하시겠습니까?",
                    confirmBtnText: "지연처리 하기",
                  })
                }
              >
                <Typography variant="h7">반납지연</Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                size="small"
                fullWidth
                onClick={() =>
                  handleButtonClick({
                    btnType: "returned",
                    dialogText: "반납완료 처리 하시겠습니까?",
                    confirmBtnText: "완료처리 하기",
                  })
                }
              >
                <Typography variant="h7">반납완료</Typography>
              </Button>
            </Grid>
          </>
        )}
        {status === "reservationInProgress" && (
          <Grid item xs={12}>
            <Button
              variant="outlined"
              size="small"
              fullWidth
              onClick={() =>
                handleButtonClick({
                  btnType: "reservationCancelled",
                  dialogText: "예약을 취소하시겠습니까?",
                  confirmBtnText: "취소처리 하기",
                })
              }
            >
              <Typography variant="h7">예약취소</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default HistoryButton;
