import { createSlice } from '@reduxjs/toolkit';

const MoodSlice = createSlice({
  name: 'mood',
  initialState: {
    // mood: `${
    //   window.matchMedia('(prefers-color-scheme: dark)').matches
    //     ? 'dark'
    //     : 'light'
    // }`,
    mood: 'dark',
  },
  reducers: {
    setMood: (state, { payload }) => {
      state.mood = payload;
    },
  },
});

export const { setMood } = MoodSlice.actions;

export default MoodSlice.reducer;
