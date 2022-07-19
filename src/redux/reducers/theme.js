import { createSlice } from "@reduxjs/toolkit";
import { themeAction } from "../services/themeServices";

const theme = JSON.parse(localStorage.getItem("theme"));

export const themeSlice = createSlice({
  name: "theme",
  initialState: theme ? theme : "light",
  reducers: {
    toggleTheme: (state, action) => {
      localStorage.setItem(
        "theme",
        JSON.stringify(themeAction.toggleTheme(state))
      );
      return themeAction.toggleTheme(state);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
