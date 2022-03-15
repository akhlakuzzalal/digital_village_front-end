import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

export const allSocialUser = createAsyncThunk('getAllUser', async (email) => {
  const responce = await axios(`/social/allUsers?email=${email}`).then(
    (res) => res.data
  );
  return responce;
});

const socialSlice = createSlice({
  name: 'social',
  initialState: {
    user: {},
    socialUsers: [],
    friends: [],
    requesting: [],
    requested: [],
    notFriends: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allSocialUser.fulfilled, (state, { payload }) => {
      state.socialUsers = payload.allUsers;
      state.user = payload.user[0];
      //   friends
      const friendsID = payload.user[0].connection;
      const friends = payload.allUsers?.filter(
        (user) => user._id === friendsID.find((id) => id)
      );
      // not Friend
      const notFriends = payload.allUsers?.filter(
        (user) => user._id !== friendsID.find((id) => id)
      );
      //   requesting
      const requestingID = payload.user[0].requesting;
      const requesting = payload.allUsers?.filter(
        (user) => user._id === requestingID.find((id) => id)
      );
      //   requested
      const requestedID = payload.user[0].requested;
      const requested = payload.allUsers?.filter(
        (user) => user._id === requestedID.find((id) => id)
      );
      state.friends = friends;
      state.requesting = requesting;
      state.requested = requested;
      state.notFriends = notFriends;
    });
  },
});

export default socialSlice.reducer;
