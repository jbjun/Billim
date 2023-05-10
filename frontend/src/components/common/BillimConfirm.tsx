import { Dialog as MUIDialog, Grid, Typography, Button } from "@mui/material";

interface IConfirmProps {
  open: boolean;

  // 컨펌창 메시지
  title: string;
  // 컨펌 버튼 메시지
  confirmMessage: string;

  // 컨펌 시 실행 할 핸들러
  onConfirm: any;
  // 취소
  onCancle: any;
}
export default function BillimConfirm({
  open,
  title,
  onConfirm,
  onCancle,
  confirmMessage,
}: IConfirmProps) {
  return (
    <MUIDialog
      open={open}
      onClose={onCancle}
      //   TransitionComponent={Transition}
    >
      <Grid
        container
        spacing={2}
        sx={{ p: 2 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Typography>{title}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" onClick={onCancle}>
            취소
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" onClick={onConfirm}>
            {confirmMessage}
          </Button>
        </Grid>
      </Grid>
    </MUIDialog>
  );
}
