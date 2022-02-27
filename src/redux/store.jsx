import { configureStore } from '@reduxjs/toolkit';
import { marketAllReducers } from './slices/eMarket/marketAllReducers';
import reviewReducer from './slices/review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    market: marketAllReducers,
  },
});
