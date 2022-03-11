import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// create the thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const response = await axios
    .get('/teacher/video/all')
    .then((response) => response.data);
  return response;
});

// fetch teacher my videos
export const fetchMyVideos = createAsyncThunk(
  'videos/fetchMyVideos',
  async (email) => {
    const response = await axios.get(`/teacher/myVideos/?email=${email}`);
    return response.data;
  }
);

export const deleteAVideo = createAsyncThunk(
  'videos/deleteAVideo',
  async (id) => {
    const response = await axios.delete(`/teacher/deleteAVideo/?id=${id}`);
    return response?.data?._id;
  }
);

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
    builder.addCase(fetchMyVideos.fulfilled, (state, { payload }) => {
      state.videos = payload;
    });
    builder.addCase(deleteAVideo.fulfilled, (state, { payload }) => {
      state.videos = state.videos.filter((video) => video._id !== payload);
    });
  },
});

export default videoSlice.reducer;
