import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './slices/eMarket/eMarketSlicle';
import notificationReducer from './slices/notification/notificationSlice';
import reviewReducer from './slices/review/reviewSlice';
import userReducer from './slices/user/userSlice';

const reducers = combineReducers({
  reviews: reviewReducer,
  modal: modalReducer,
  notifications: notificationReducer,
  user: userReducer,
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
