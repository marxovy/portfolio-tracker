import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: true,
    menuCollapsed: false,
  },
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    toggleMenuCollapse(state) {
      state.menuCollapsed = !state.menuCollapsed;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
