import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const tableSlice = createSlice({
  name: "table",
  initialState: [],
  reducers: {
    informations: (state, action) => {
      return (state = action.payload);
    },
    isShowings: (state, action) => {
      const item = state.find((todo) => todo.id === action.payload);
      if (item) {
        item.isShowing = !item.isShowing;
      }
    },
    isEditPosition: (state, action) => {
      const edit = state.find((todo) => todo.id === action.payload.id);
      if (edit) {
        edit.position = action.payload.data;
      }
    },
    isEditOffice: (state, action) => {
      const edit = state.find((todo) => todo.id === action.payload.id);
      if (edit) {
        edit.office = action.payload.data;
      }
    },

    // changeData: (state, action) => {
    //   const item = state.find((todo) => todo.id === action.payload.id);
    //   if(item){
    //     item.
    //   }
    // }
  },
});

export const {
  informations,
  currentData,
  isShowings,
  isEditPosition,
  isEditOffice,
} = tableSlice.actions;

export default tableSlice.reducer;
