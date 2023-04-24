import { Dialog as MUIDialog, Grid, Typography, Button } from "@mui/material";

interface IChattingListRemoveConfirmDialogProps {
  open: boolean;
  // 삭제
  onConfirm: any;
  // 취소
  onCancle: any;
}
export default function ChatRemoveConfirmDialog({
  open,
  onConfirm,
  onCancle,
}: IChattingListRemoveConfirmDialogProps) {
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
          <Typography>
            삭제 시 대화 내용이 모두 삭제되고 채팅 목록에서도 삭제돼요.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" onClick={onCancle}>
            취소
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" onClick={onConfirm}>
            삭제
          </Button>
        </Grid>
      </Grid>
    </MUIDialog>
  );
}
