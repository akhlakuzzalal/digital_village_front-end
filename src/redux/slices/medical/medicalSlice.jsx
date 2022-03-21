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

// add appontment
export const addAnAppointment = createAsyncThunk(
  'medical/postAnAppointment',
  async (appointment) => {
    const response = await axios
      .post('/availableAppointment/saveAppointment', appointment)
      .then((response) => response.data);
    return response;
  }
);
// show user appointment event
export const showUserAppointment = createAsyncThunk(
  'events/showAppointment',
  async (email, date) => {
    const response = await axios
      .get(`/appointment/findUserAppointment?email=${email}&date=${date}`)
      .then((response) => response.data);
    return response;
  }
);

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
    // builder.addCase(fetchUpcomingEvents.fulfilled, (state, { payload }) => {
    //   state.upcomingEvents = payload;
    // });
    //   builder.addCase(fetchArchivedEvents.fulfilled, (state, { payload }) => {
    //     state.archivedEvents = payload;
    //   });
    //   //add event
    //   builder.addCase(addAnEvent.fulfilled, (state, { payload }) => {
    //     state.allEvents.push(payload);
    //   });
    builder.addCase(addAnAppointment.fulfilled, (state, { payload }) => {
      state.allAvailableAppointment.filter(
        (appointment) => appointment._id !== payload
      );
    });
    builder.addCase(showUserAppointment.fulfilled, (state, { payload }) => {
      state.allAvailableAppointment.filter(
        (appointment) =>
          appointment.email !== payload.email &&
          appointment.date !== payload.date
      );
    });
  },
});

export const { setSelectedEvent } = medicalSlice.actions;

export default medicalSlice.reducer;
