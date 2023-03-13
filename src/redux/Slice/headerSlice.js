import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    show: "10",
    search: "",
    name: {},
  },
  reducers: {
    showEntries: (state, action) => {
      state.show = action.payload;
    },
    searchText: (state, action) => {
      state.search = action.payload;
    },
    reverseNameAction: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { showEntries, searchText, reverseNameAction } =
  headerSlice.actions;
export default headerSlice.reducer;
