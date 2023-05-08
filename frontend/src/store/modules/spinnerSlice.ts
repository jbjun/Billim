import { createSlice } from "@reduxjs/toolkit";

interface ISpinnerState {
  isOpen: boolean;
}

const initialState: ISpinnerState = {
  isOpen: false,
};

const spinnerSlice = createSlice({
  name: "spinner",
  initialState,
  reducers: {
    showSpinner: (state) => {
      state.isOpen = true;
    },
    hideSpinner: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
export default spinnerSlice;
