import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../api/axios";

  // create the thunk
  //fetch all causes 
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
  //Get all help apply causes
// export const fetchAllApply = createAsyncThunk(
//   'cuases/fetchAllApply',
//   async () => {
//     const response = await axios
//       .get('/donation/request')
//       .then((response) => response.data);
//       // console.log(response);
//     return response;
//   }
// );
  //get all donar donation payments
// export const fetchAllPayments = createAsyncThunk(
//   'cuases/fetchAllPayments',
//   async () => {
//     const response = await axios
//       .get('/donation/payments')
//       .then((response) => response.data);
//       // console.log(response);
//     return response;
//   }
// );

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
// add donation payment by donar
// export const addAnDonation = createAsyncThunk(
//   'cuases/addAnDonation',
//   async (cause) => {
//     const response = await axios
//       .post('/donation/donation', cause)
//       .then((response) => response.data);
//     return response;
//   }
// );

// add help request form apply
// export const helpAnRequestApply = createAsyncThunk(
//   'cuases/helpAnRequestApply',
//   async (cause) => {
//     const response = await axios
//       .post('/donation/apply', cause)
//       .then((response) => response.data);
//     return response;
//   }
// );

// update cuase
export const updateAnCuase = createAsyncThunk(
  'cuases/updateAnCuase',
  async (data) => {
    // console.log(data);
await axios.put(`/donation/updatecuase/?id=${data.id}` , data )
    return data;
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

const donationSlice = createSlice({
  name: 'causes',
  initialState: {
    causes: [],
    updatecause:{},
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCuases.fulfilled, (state, { payload }) => {
      state.causes = payload;
    });
    // fetch All Apply
    // builder.addCase(fetchAllApply.fulfilled, (state, { payload }) => {
    //   state.causes = payload;
    // });
    // fetch All Payments
    // builder.addCase(fetchAllPayments.fulfilled, (state, { payload }) => {
    //   state.causes = payload;
    // });
    // //add cuase
    builder.addCase(addAnCuase.fulfilled, (state, { payload }) => {
      state.causes.push(payload);
    });
    // //add help Request Apply
    // builder.addCase(helpAnRequestApply.fulfilled, (state, { payload }) => {
    //   state.causes.push(payload);
    // });
    // donation Payment add by donar
    // builder.addCase(addAnDonation.fulfilled, (state, { payload }) => {
    //   state.causes.push(payload);
    // });
    //update cause
    builder.addCase(updateAnCuase.fulfilled, (state, { payload }) =>  { 

    const prevCause = state.causes.find(
              (cause) => cause._id === payload.id
            );
            const updateCause = {...prevCause, ...payload}
            const removeCause = state.causes.filter((cause) => cause._id !== payload.id)
            state.causes=[...removeCause,updateCause ]
         
    });
    
    //delete
    builder.addCase(deleteAnCuase.fulfilled, (state, { payload }) =>  { 
      console.log(payload);
      state.causes = state.causes.filter(
              (cause) => cause._id !== payload
            );
    });

  },

});

export default donationSlice.reducer;