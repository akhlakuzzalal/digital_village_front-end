import { createSlice } from '@reduxjs/toolkit';

const reviews = [
  {
    name: 'review 1',
    rate: 3,
    comment: 'this is a good website',
  },
  {
    name: 'review 2',
    rate: 3,
    comment: 'this is a good website',
  },
];

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: reviews,
  },
  reducers: {
    addReview: (state, { payload }) => {
      state.reviews.push(payload);
    },
  },
});

export default reviewSlice.reducer;
