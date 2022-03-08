import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fetch all notification from database
export const fetchAllProducts = createAsyncThunk('e-market', async () => {
  const response = await axios
    .get('/emarket/products')
    .then((response) => response.data);
  return response;
});

// delete a product
export const deleteAProduct = createAsyncThunk('deleteProduct', async (id) => {
  console.log(id, 'thunk');
  await axios.delete(`/emarket/delete/${id}`);
  return id;
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
    // delete
    builder.addCase(deleteAProduct.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.products = state.products.filter((cause) => cause._id !== payload);
    });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
