import { createSlice } from "@reduxjs/toolkit";



const initialState = {};

export const globalStateSlice = createSlice({
  name: "global",
  initialState,
  reducers: {}
});

export const {} = globalStateSlice.actions;
export const globalStateReducer = globalStateSlice.reducer;
  