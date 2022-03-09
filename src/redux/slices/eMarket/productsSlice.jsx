import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fetch all notification from database
export const fetchAllProducts = createAsyncThunk('e-market', async () => {
  const response = await axios
    .get('/emarket/products')
    .then((response) => response.data);
  return response;
});

// Add a Product
export const addProduct = createAsyncThunk('addProduct', async (data) => {
  const response = await axios
    .post('/emarket/products', data)
    .then((response) => response.data);
  return response;
});

// delete a product
export const deleteAProduct = createAsyncThunk('deleteProduct', async (id) => {
  await axios.delete(`/emarket/delete/${id}`);
  return id;
});

// Update a Product
export const updateAProduct = createAsyncThunk(
  'updateProduct',
  async (data) => {
    await axios.put(`/emarket/update/${data._id}`, data);
    return data;
  }
);

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
    // get all data
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    // Add a product
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.products.push(payload[0]);
    });
    // delete
    builder.addCase(deleteAProduct.fulfilled, (state, { payload }) => {
      state.products = state.products.filter((cause) => cause._id !== payload);
    });
    // update a product
    builder.addCase(updateAProduct.fulfilled, (state, { payload }) => {
      const prevProduct = state.products.find(
        (product) => product._id === payload._id
      );
      const updateProducts = { ...prevProduct, ...payload };
      const afterRemove = state.products.filter(
        (cause) => cause._id !== payload._id
      );
      state.products = [...afterRemove, updateProducts];
    });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
