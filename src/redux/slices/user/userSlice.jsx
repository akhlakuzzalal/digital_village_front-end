import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    roles: [],
    token: '',
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
  },
});

export const { setRoles, setToken, setUser } = userSlice.actions;

export default userSlice.reducer;
