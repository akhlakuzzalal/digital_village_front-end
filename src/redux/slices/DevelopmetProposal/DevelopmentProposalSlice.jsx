import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fectch All Development
export const fetchAllDevelopmentProposals = createAsyncThunk(
  'developmentProposals/fetchAllDevelopmentProposals',
  async () => {
    const response = axios
      .get('/developmentProposal/all')
      .then((response) => response.data);
    return response;
  }
);

const developmentSlice = createSlice({
  name: 'developmentProposals',
  initialState: {
    developmentProposals: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    //   get all development
    builder.addCase(
      fetchAllDevelopmentProposals.fulfilled,
      (state, { payload }) => {
        if (payload && payload.length >= 1) {
          state.developmentProposals = payload;
        }
      }
    );
  },
});

export default developmentSlice.reducer;
