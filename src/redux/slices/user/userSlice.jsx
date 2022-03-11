import { createSlice } from '@reduxjs/toolkit';

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
});

export const { setRoles, setToken, setUser, setUId } = userSlice.actions;

export default userSlice.reducer;
