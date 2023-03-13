import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./Slice/headerSlice";
import tableSlice from "./Slice/tableSlice";
import footerSlice from "./Slice/footerSlice";

export const store = configureStore({
  reducer: {
    dataTable: tableSlice,
    header: headerSlice,
    footer: footerSlice,
  },
});
