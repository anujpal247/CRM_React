import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";

const initialState = {
  role: localStorage.getItem("role") || "",
  data: JSON.parse(localStorage.getItem("data")) || {},
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  token: localStorage.getItem("token") || "",
};

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = axiosInstance.post("/auth/signin", data);
    toast.promise(response, {
      loading: "submitting form",
      success: "logged in successfully",
      error: "something went worng",
    });
    return await response;
  } catch (error) {
    console.log("authSlice :: login :: error ", error);
  }
});

export const signup = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const response = axiosInstance.post("/auth/signup", data);
    toast.promise(response, {
      loading: "submitting form!!",
      success: "successfully signed up",
      error: "something went worng",
    });
    return await response;
  } catch (error) {
    console.log("authSlice :: signup :: error ", error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.isLoggedIn = false;
      state.role = "";
      state.data = {};
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload.data?.token !== undefined;
      state.data = action.payload.data?.userData; // returned value from thunk obj
      state.token = action.payload.data?.token;
      state.role = action.payload.data?.userData?.userType;
      localStorage.setItem("role", action.payload.data?.userData?.userType);
      localStorage.setItem(
        "isLoggedIn",
        action.payload.data?.token !== undefined
      );
      localStorage.setItem("token", action.payload.data?.token);
      localStorage.setItem(
        "data",
        JSON.stringify(action.payload.data?.userData)
      );
    });
    // .addCase(login.rejected, (state, action) => {
    //   // add logic here to handle when promise is rejected
    // });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
