import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
