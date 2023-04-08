import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  Dialog as MUIDialog,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import Header from "./Header";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IDialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactElement | React.ReactElement[];
}
function Dialog({ title, open, onClose, children }: IDialogProps) {
  return (
    <MUIDialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Header
        title={title}
        adornment={
          <IconButton edge="end" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
      />
      {children}
    </MUIDialog>
  );
}

export default Dialog;
