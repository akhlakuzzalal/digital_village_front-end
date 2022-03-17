import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
  const response = await axios
    .get('/user/all')
    .then((response) => response.data);
  return response;
});

export const getSingleUserInfo = createAsyncThunk(
  'user/getSingleUserInfo',
  async ({ id }) => {
    const response = await axios
      .get(`/user/singleUserInfo?id=${id}`)
      .then((response) => response.data);
    return response;
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ id, formData }) => {
    const response = await axios
      .put(`/user/update/?id=${id}`, formData)
      .then((response) => response.data);
    return response;
  }
);

export const updateUserWithoutProfileImg = createAsyncThunk(
  'user/updateUserWithoutProfileImg',
  async ({ id, data }) => {
    const response = await axios
      .put(`/user/updateWithoutProfileImg/?id=${id}`, data)
      .then((response) => response.data);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    allUsers: [],
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
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.allUsers = payload;
    });
    builder.addCase(getSingleUserInfo.fulfilled, (state, { payload }) => {
      if (payload && payload.length >= 1) {
        state.user = payload[0];
      }
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      if (payload && payload.length >= 1) {
        state.user = payload[0];
      }
    });
    builder.addCase(
      updateUserWithoutProfileImg.fulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const { setRoles, setToken, setUser, setUId } = userSlice.actions;

export default userSlice.reducer;
