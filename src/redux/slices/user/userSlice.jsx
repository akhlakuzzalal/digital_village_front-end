import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

export const updateUser = createAsyncThunk('user/updateUser', async (id) => {
  const response = await axios
    .put(`/user/update/?id=${id}`)
    .then((response) => response.data);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    roles: [],
    token: '',
    uId: '',
  },
  reducers: {
    setRoles: (state, { payload }) => {
      state.roles = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUId: (state, { payload }) => {
      state.uId = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      console.log('this is updated user', payload);
      // state.user = payload
    });
  },
});

export const { setRoles, setToken, setUser, setUId } = userSlice.actions;

export default userSlice.reducer;
