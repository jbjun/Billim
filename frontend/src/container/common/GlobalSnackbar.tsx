import { useSelector, useDispatch } from "react-redux";
import { Snackbar, Alert, Typography } from "@mui/material";
import { RootState } from "@store/index";
import { hideSnackbar } from "@store/modules/snackbarSlice";
import Slide, { SlideProps } from "@mui/material/Slide";

type TransitionProps = Omit<SlideProps, "direction">;

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction="up" />;
};

const GlobalSnackbar = () => {
  const snackbar = useSelector((state: RootState) => state.snackbar);
  const { severity, message } = snackbar;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={snackbar.open}
      onClose={handleClose}
      message={severity === undefined && message}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={TransitionUp}
      ContentProps={{
        sx: {
          maxWidth: "fit-content",
          display: "flex",
          justifyContent: "center",
          paddingX: 3,
          paddingY: 0.5,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      }}
    ></Snackbar>
  );
};

export default GlobalSnackbar;
