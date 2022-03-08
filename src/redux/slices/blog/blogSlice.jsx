import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios
    .get('/student/allBlogs')
    .then((response) => response.data);
  return response;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.blogs = payload.blogs;
    });
  },
});

export default blogSlice.reducer;
