import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllAvailableAppointments = createAsyncThunk(
  'medical/fetchAllAvailableAppointments',
  async () => {
    const response = await axios
      .get('/availableAppointment/getAppointment')
      .then((response) => response.data);
    return response;
  }
);

// add event
// export const addAnEvent = createAsyncThunk(
//   'events/postAnEvent',
//   async (event) => {
//     const response = await axios
//       .post('/event/addEvent', event)
//       .then((response) => response.data);
//     return response;
//   }
// );
// delete event
// export const deleteAnEvent = createAsyncThunk(
//   'events/deleteAnEvent',
//   async (id) => {
//     const response = await axios
//       .delete(`/event/deleteEvent/?id=${id}`)
//       .then((response) => response.data);
//     return response;
//   }
// );

// export const fetchUpcomingEvents = createAsyncThunk(
//   'events/fetchUpcomingEvents',
//   async () => {
//     const response = await axios
//       .get('/event/upcomingEvents')
//       .then((response) => response.data);
//     return response;
//   }
// );
// export const fetchArchivedEvents = createAsyncThunk(
//   'events/fetchArchivedEvents',
//   async () => {
//     const response = await axios
//       .get('/event/archivedEvents')
//       .then((response) => response.data);
//     return response;
//   }
// );

const medicalSlice = createSlice({
  name: 'medical',
  initialState: {
    allAvailableAppointment: [],
    upcomingEvents: [],
    archivedEvents: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllAvailableAppointments.fulfilled,
      (state, { payload }) => {
        state.allAvailableAppointment = payload;
      }
    );
    //   builder.addCase(fetchUpcomingEvents.fulfilled, (state, { payload }) => {
    //     state.upcomingEvents = payload;
    //   });
    //   builder.addCase(fetchArchivedEvents.fulfilled, (state, { payload }) => {
    //     state.archivedEvents = payload;
    //   });
    //   //add event
    //   builder.addCase(addAnEvent.fulfilled, (state, { payload }) => {
    //     state.allEvents.push(payload);
    //   });
    //   builder.addCase(deleteAnEvent.fulfilled, (state, { payload }) => {
    //     state.allEvents.filter((event) => event._id !== payload);
    //   });
  },
});

export const { setSelectedEvent } = medicalSlice.actions;

export default medicalSlice.reducer;
