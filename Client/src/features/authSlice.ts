import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../lib/api";

export interface User {
  name: string;
  emailId: string;
  profilepicture: string;
}

export const fetchUser = createAsyncThunk<
  User,
  void,
  { rejectValue: object | string }
>("auth/fetchUser", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/auth/me");
    return response?.data?.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

export const logoutUser = createAsyncThunk<
  object,
  void,
  { rejectValue: object | string }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await api.post("/auth/logout");
    return response?.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: null | string | object;
  user: User | null;
}

const initialState: AuthState = {
  isLoading: true,
  isAuthenticated: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
        state.user = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = !!action.payload;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload || "Something went wrong";
        state.user = null;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.error = null;
        state.user = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = null;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload || "Something went wrong";
        state.user = null;
      });
  },
});

export default authSlice.reducer;
