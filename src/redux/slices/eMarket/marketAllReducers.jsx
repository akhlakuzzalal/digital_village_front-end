import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import modalSlice from './modalSlicle';
import productsSlice from './productsSlice';

export const marketAllReducers = combineReducers({
  modal: modalSlice,
  cart: cartSlice,
  products: productsSlice,
});
