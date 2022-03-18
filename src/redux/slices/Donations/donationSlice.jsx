import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// fetch all causes
export const fetchAllCuases = createAsyncThunk(
  'cuases/fetchAllCuases',
  async () => {
    const response = await axios
      .get('/donationCause/all')
      .then((response) => response.data);
    return response;
  }
);

// add cuase
export const addACuase = createAsyncThunk(
  'cuases/addACuase',
  async (formData) => {
    const response = await axios
      .post('/donationCause/add', formData)
      .then((response) => response.data);
    return response;
  }
);

// update cuase
export const updateACause = createAsyncThunk(
  'cuases/updateACause',

  async ({ id, formData }) => {
    const response = await axios.put(
      `/donationCause/update/?id=${id}`,
      formData
    );
    return {
      id,
      response,
    };
  }
);

// delete cuase
export const deleteACause = createAsyncThunk(
  'cuases/deleteACause',
  async (id) => {
    await axios.delete(`/donationCause/delete/?id=${id}`);
    return id;
  }
);

// export const fetchDonarPayment = createAsyncThunk(
//   'cuases/fetchDonarPayment',
//   async () => {
//     const response = await axios
//       .get('/donation/donarpayment')
//       .then((response) => response.data);
//     return response;
//   }
// );

const donationSlice = createSlice({
  name: 'causes',
  initialState: {
    causes: [],
    updatecause: {},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCuases.fulfilled, (state, { payload }) => {
      state.causes = payload;
    });
    builder.addCase(addACuase.fulfilled, (state, { payload }) => {
      state.causes.push(payload);
    });
    builder.addCase(updateACause.fulfilled, (state, { payload }) => {
      const updatedCause = payload.response[0];
      const AllCausesAfterRemovingThePrev = state.causes.filter(
        (cause) => cause._id !== payload.id
      );
      state.causes = [...AllCausesAfterRemovingThePrev, updatedCause];
    });

    //delete
    builder.addCase(deleteACause.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.causes = state.causes.filter((cause) => cause._id !== payload);
    });
    //  //Payment add
    //  builder.addCase(fetchDonarPayment.fulfilled, (state, { payload }) => {
    //   state.causes.push(payload);
    // });
  },
});

// export const { removeFromCause } = donationSlice.actions;

export default donationSlice.reducer;
