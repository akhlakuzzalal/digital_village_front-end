import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import modalSlice from './eMarketSlicle';

export const marketAllReducers = combineReducers({
  modal: modalSlice,
  cart: cartSlice,
});
