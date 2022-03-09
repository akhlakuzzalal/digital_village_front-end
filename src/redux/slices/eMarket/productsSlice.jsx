import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// fetch all notification from database
export const fetchAllProducts = createAsyncThunk('e-market', async () => {
  const response = await axios
    .get('/emartket/products')
    .then((response) => response.data);
  return response;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
