import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { marketAllReducers } from './slices/eMarket/marketAllReducers';
import eventReducer from './slices/event/eventSlice';
import notificationReducer from './slices/notification/notificationSlice';
import reviewReducer from './slices/review/reviewSlice';
import userReducer from './slices/user/userSlice';

const reducers = combineReducers({
  reviews: reviewReducer,
  notifications: notificationReducer,
  user: userReducer,
  market: marketAllReducers,
  events: eventReducer,
});

const persistConfig = {
  key: 'digital_village_storage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['detectStateChange'],
      },
    }),
});

export const persistor = persistStore(store);
