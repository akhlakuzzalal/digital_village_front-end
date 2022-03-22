import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fectch All Development
export const fetchAllDevelopmentProposal = createAsyncThunk(
  'allDevelopment',
  async () => {
    const responce = axios
      .get('/developmentProposal/allDevelopment')
      .then((responce) => responce.data);
    return responce;
  }
);

const developmentSlice = createSlice({
  name: 'proposals',
  initialState: {
    proposals: [],
    alert: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    //   get all development
    builder.addCase(
      fetchAllDevelopmentProposal.fulfilled,
      (state, { payload }) => {
        state.proposals = payload;
      }
    );
  },
});

export default developmentSlice.reducer;
