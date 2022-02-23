import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/eMarket/eMarketSlicle';
import reviewReducer from './slices/review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    modal: modalSlice,
  },
});
