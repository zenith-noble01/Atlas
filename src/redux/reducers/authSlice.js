import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../services/authservices";

const student = JSON.parse(localStorage.getItem("student"));

const initialState = {
  student: student ? student : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerStudent = createAsyncThunk(
  "auth/register",
  async (student, thunkAPI) => {
    try {
      return await authServices.registerStudent(student);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.student = null;
      });
  },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;