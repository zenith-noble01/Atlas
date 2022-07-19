import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import themeReducer from "../reducers/theme";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
});
