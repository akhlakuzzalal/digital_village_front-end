import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      const newCart = state.cart.filter((cart) => cart.id !== payload.id);
      state.cart = newCart;
    },
  },
});

export const { setCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
