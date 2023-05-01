import { createReducer } from "@reduxjs/toolkit";

export interface IState {}

const root: IState = {};

// layout
export const rootReducer = createReducer(root, (builder) => {
  // builder
  //   .addCase(changeCurrentNodeId, (state, action) => {
  //   })
});
