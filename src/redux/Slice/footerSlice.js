import { createSlice } from "@reduxjs/toolkit";

export const footerSlice = createSlice({
  name: "footer",
  initialState: {
    start: 0,
    end: 0,
  },
  reducers: {
    start: (state, action) => {
      state.start = action.payload;
    },
    end: (state, action) => {
      state.end = action.payload;
    },
  },
});

export const { start, end } = footerSlice.actions;
export default footerSlice.reducer;
