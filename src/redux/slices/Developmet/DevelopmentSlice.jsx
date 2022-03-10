import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fectch All Development
export const fetchAllDevelopment = createAsyncThunk(
  'allDevelopment',
  async () => {
    const responce = axios
      .get('/development/allDevelopment')
      .then((responce) => responce.data);
    return responce;
  }
);

// handle upvote
export const addUpvote = createAsyncThunk('upvote', async ({ id, email }) => {
  const responce = await axios
    .put(`/development/upvote?id=${id}&email=${email}`)
    .then((responce) => responce.data);
  return { ...responce, id, email };
});

// handle downvote
export const addDownvote = createAsyncThunk(
  'downvote',
  async ({ id, email }) => {
    const responce = await axios
      .put(`/development/upvote?id=${id}&email=${email}`)
      .then((responce) => responce.data);
    return { ...responce, id, email };
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
    builder.addCase(fetchAllDevelopment.fulfilled, (state, { payload }) => {
      state.proposals = payload;
    });
    // upvote
    builder.addCase(addUpvote.fulfilled, (state, { payload }) => {
      if (payload.acknowledged) {
        const proposal = state.proposals.find((p) => p._id === payload.id);
        proposal.upvotes = [...proposal?.upvotes, payload.email];
        const restProposals = state.proposals.filter(
          (p) => p._id !== payload.id
        );
        const newProposals = [proposal, ...restProposals];
        newProposals.sort((a, b) => a?.upvotes?.length - b?.price?.length);
        state.proposals = newProposals;
      }
    });
    // downvote
    builder.addCase(addDownvote.fulfilled, (state, { payload }) => {
      if (payload.acknowledged) {
        const proposal = state.proposals.find((p) => p._id === payload.id);
        proposal.downvotes = [...proposal?.downvotes, payload.email];
        const restProposals = state.proposals.filter(
          (p) => p._id !== payload.id
        );
        const newProposals = [proposal, ...restProposals];
        newProposals.sort((a, b) => a?.upvotes?.length - b?.price?.length);
        state.proposals = newProposals;
      }
    });
  },
});

export default developmentSlice.reducer;
