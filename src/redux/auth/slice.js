import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    error: null,
    loading: false,
    isRefreshing: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.error = false;
        state.isLoggedIn = false;
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logIn.pending, (state) => {
        state.error = false;
        state.isLoggedIn = false;
        state.loading = true;
      }) 
      .addCase(logIn.fulfilled, (state, action) => {
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.pending, (state) => {
        state.error = false;
        state.isLoggedIn = false;
        state.loading = true;
      }) 
      .addCase(logOut.fulfilled, (state) => {
        state.error = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = true;
      })
      .addCase(logOut.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.error = false;
        state.isRefreshing = true;
        state.loading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.error = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.loading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export default authSlice.reducer;