import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


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
export const addAnCuase = createAsyncThunk(
  'cuases/postAnCuase',
  async (event) => {
    const response = await axios
      .post('/donation/addcuase', event)
      .then((response) => response.data);
    return response;
  }
);
// update cuase
export const updateAnCuase = createAsyncThunk(
  'cuases/updateAnCuase',
  async (id) => {
    console.log('hitted');
await axios.put(`/donation/updatecuase/?id=${id}`)
    return id;
  }
);
// delete cuase
export const deleteAnCuase = createAsyncThunk(
  'cuases/deleteAnCuase',
  async (id) => {
     await axios
      .delete(`/donation/deletecuase/?id=${id}`)
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
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCuases.fulfilled, (state, { payload }) => {
      state.causes = payload;
    });
    // //add cuase
    builder.addCase(addAnCuase.fulfilled, (state, { payload }) => {
      state.causes.push(payload);
    });
    //update
    builder.addCase(updateAnCuase.fulfilled, (state, { payload }) =>  { 
      console.log(payload);
      state.causes = state.causes.find(
              (cause) => cause._id === payload.id
            );
    });
    //delete
    builder.addCase(deleteAnCuase.fulfilled, (state, { payload }) =>  { 
      console.log(payload);
      state.causes = state.causes.filter(
              (cause) => cause._id !== payload
            );
    });
    //  //Payment add
    //  builder.addCase(fetchDonarPayment.fulfilled, (state, { payload }) => {
    //   state.causes.push(payload);
    // });
  },

});

// export const { removeFromCause } = donationSlice.actions;

export default donationSlice.reducer;