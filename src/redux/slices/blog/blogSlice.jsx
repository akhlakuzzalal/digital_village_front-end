import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (pagination) => {
    const response = await axios
      .get(
        `/student/allBlogs/?page=${pagination.currPage}&size=${
          pagination.size
        }&roles=${JSON.stringify([2000])}`
      )
      .then((response) => response.data);
    return {
      blogs: response.blogs,
      count: response.count,
      pageCount: pagination.pageCount,
      size: pagination.size,
    };
  }
);

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    pageCount: 0,
    currPage: 0,
  },
  reducers: {
    setCurrPage: (state, { payload }) => {
      console.log(payload);
      state.currPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
      state.blogs = payload.blogs;
      const count = payload.count;
      console.log('this is count', count);
      const pageNumber = Math.ceil(count / payload.size);
      state.pageCount = pageNumber;
      console.log('this is page count', state.pageCount);
    });
  },
});

export const { setCurrPage } = blogSlice.actions;

export default blogSlice.reducer;
