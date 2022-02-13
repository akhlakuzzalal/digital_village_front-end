import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './slices/review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});
