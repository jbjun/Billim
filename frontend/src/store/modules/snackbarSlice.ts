import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISnackbarState {
  open: boolean;
  message: string;
  severity?: "success" | "error" | "info" | "warning";
}

const initialState: ISnackbarState = {
  open: false,
  message: "",
  severity: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{
        message: string;
        severity?: ISnackbarState["severity"];
      }>
    ) => {
      const { message, severity } = action.payload;
      state.open = true;
      state.message = message;
      state.severity = severity;
    },
    hideSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice;
