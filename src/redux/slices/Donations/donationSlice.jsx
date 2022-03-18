import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

// create the thunk
export const fetchAllCuases = createAsyncThunk(
  'cuases/fetchAllCuases',
  async () => {
    const response = await axios
      .get('/donation/cuases')
      .then((response) => response.data);
    // console.log(response);
    return response;
  }
);

// add cuase
export const addACuase = createAsyncThunk(
  'cuases/postAnCuase',
  async (event) => {
    const response = await axios
      .post('/donation/addcuase', event)
      .then((response) => response.data);
    return response;
  }
);
// update cuase
export const updateACause = createAsyncThunk(
  'cuases/updateACause',

  async (data) => {
    console.log(data);
    await axios.put(`/donation/updatecuase/?id=${data.id}`, data);
    return data;
  }
);
// delete cuase
export const deleteACause = createAsyncThunk(
  'cuases/deleteACause',
  async (id) => {
    await axios.delete(`/donation/deletecuase/?id=${id}`);
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
    // //add cuase
    builder.addCase(addACuase.fulfilled, (state, { payload }) => {
      state.causes.push(payload);
    });
    builder.addCase(updateACause.fulfilled, (state, { payload }) => {
      const prevCause = state.causes.find((cause) => cause._id === payload.id);
      // state.causes={...prevCause, ...data}
      const updateCause = { ...prevCause, ...payload };
      const removeCause = state.causes.filter(
        (cause) => cause._id !== payload.id
      );
      state.causes = [...removeCause, updateCause];
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
