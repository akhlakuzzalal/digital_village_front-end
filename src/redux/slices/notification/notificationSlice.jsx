import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllNotifications = createAsyncThunk(
  'notifications/fetchAllNotifications',
  async () => {
    const response = await axios
      .get('/notification/all')
      .then((response) => response.data);
    return response;
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllNotifications.fulfilled, (state, { payload }) => {
      state.notifications = payload;
    });
  },
});

export default notificationSlice.reducer;
