// src/redux/slices/registerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BASE_URL from '../config';

export const registerUser = createAsyncThunk('register/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/register`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default registerSlice.reducer;
