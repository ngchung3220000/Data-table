import { createSelector } from "@reduxjs/toolkit";
export const informationsSelector = (state) => state.dataTable;
export const showNumberEntries = (state) => state.header.show;
export const searchText = (state) => state.header.search;
export const startIndex = (state) => state.footer.start;
export const endIndex = (state) => state.footer.end;
export const reverseNameAction = (state) => state.header.name;

export const infoRemainingSelector = createSelector(
  informationsSelector,
  searchText,
  (info, searchText) => {
    if (searchText.length) {
      return info.filter(
        (info) => info.name.toLowerCase().indexOf(searchText.trim()) !== -1
      );
    } else {
      return info;
    }
  }
);
