import { combineReducers } from "@reduxjs/toolkit";
import snackbarSlice from "./modules/snackbarSlice";
import spinnerSlice from "./modules/spinnerSlice";

export interface IState {}

const root: IState = {};

// layout
export const rootReducer = combineReducers({
  snackbar: snackbarSlice.reducer,
  spinner: spinnerSlice.reducer,
});
