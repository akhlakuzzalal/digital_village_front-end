import { createSlice } from "@reduxjs/toolkit";


const donationSlice = createSlice({
  name: 'causes',
  initialState: {
    causes: [],
  },
  reducers: {
    setCauses: (state, { payload }) => {
      state.causes = payload;
    },
  },
  
});

export const { setCauses } = donationSlice.actions;

export default donationSlice.reducer;