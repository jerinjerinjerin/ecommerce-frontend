import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
  email: string;
  profileUrl?: string | null;
  isAuthenticated?: boolean;
  otp?: number | string;
  otpExpiredAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  role?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createUserStart: (state) => {
      state.user = null;
      state.loading = true;
      state.error = null;
    },
    createUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    createUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
    loginUserStart: (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
    },
    loginUserSuccess: (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
    },
    loginUserFailure: (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
    }
  },
});

export default authSlice.reducer;

export const { 
    createUserSuccess, 
    createUserFailure, 
    createUserStart,
    loginUserStart,
    loginUserFailure,
    loginUserSuccess, 
} = authSlice.actions;
