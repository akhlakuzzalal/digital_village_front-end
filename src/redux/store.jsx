import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/eMarket/eMarketSlicle';
import notificationReducer from './slices/notification/notificationSlice';
import reviewReducer from './slices/review/reviewSlice';

export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
    modal: modalReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['detectStateChange'],
      },
    }),
});
