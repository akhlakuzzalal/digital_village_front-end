import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './slices/event/eventSlice';
import reviewReducer from './slices/review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    events: eventReducer,
  },
});
