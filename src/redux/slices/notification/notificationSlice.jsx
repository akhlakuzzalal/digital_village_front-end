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

export const fetchUserSpecificNotification = createAsyncThunk(
  'notifications/fetchUserSpecificNotification',
  async (email) => {
    const response = await axios
      .get(`/notification/userSpecificNotifciations/?email=${email}`)
      .then((response) => response.data);
    return response;
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    selectedNotification: {},
  },
  reducers: {
    setSelectedNotification: (state, { payload }) => {
      const [selected] = state.notifications.filter(
        (notification) => notification._id === payload
      );
      state.selectedNotification = selected;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllNotifications.fulfilled, (state, { payload }) => {
      state.notifications = payload;
    });
    builder.addCase(
      fetchUserSpecificNotification.fulfilled,
      (state, { payload }) => {
        if (payload && payload.length >= 1) {
          state.notifications = payload;
        }
      }
    );
  },
});

export const { setSelectedNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
