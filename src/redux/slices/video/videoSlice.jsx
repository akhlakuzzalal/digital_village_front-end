import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// create the thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const response = await axios
    .get('/teacher/video/all')
    .then((response) => response.data);
  return response;
});

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, { payload }) => {
      state.videos = payload;
    });
  },
});

export default videoSlice.reducer;
