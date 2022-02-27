import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const events = [
//   {
//     title: 'event 1',
//     description:
//       'With less than a month to go before the European Union enacts The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. ',
//     image: 'this is a good website',
//     date: '22 feb 2023',
//   },
//   {
//     title: 'event 1',
//     description: 3,
//     image: 'this is a good website',
//     date: '22 feb 2023',
//   },
// ];

// create the thunk
export const fetchAllEvent = createAsyncThunk(
  'events/fetchAllEvents',
  async () => {
    const response = await axios
      .get('/event/allEvent')
      .then((response) => response.data);
    return response;
  }
);

// add event
export const addAnEvent = createAsyncThunk(
  'events/postAnEvent',
  async (event) => {
    const response = await axios
      .post('/event/addEvent', event)
      .then((response) => response.data);
    return response;
  }
);

export const fetchUpcomingEvents = createAsyncThunk(
  'events/fetchUpcomingEvents',
  async () => {
    const response = await axios
      .get('/event/upcomingEvents')
      .then((response) => response.data);
    return response;
  }
);
export const fetchArchivedEvents = createAsyncThunk(
  'events/fetchArchivedEvents',
  async () => {
    const response = await axios
      .get('/event/archivedEvents')
      .then((response) => response.data);
    return response;
  }
);

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    allEvents: [],
    upcomingEvents: [],
    archivedEvents: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllEvent.fulfilled, (state, { payload }) => {
      console.log('allEvent', payload);
      state.allEvents = payload;
    });
    builder.addCase(fetchUpcomingEvents.fulfilled, (state, { payload }) => {
      console.log('upcoming events', payload);
      state.upcomingEvents = payload;
    });
    builder.addCase(fetchArchivedEvents.fulfilled, (state, { payload }) => {
      console.log('archived events', payload);
      state.archivedEvents = payload;
    });
    builder.addCase(addAnEvent.fulfilled, (state, { payload }) => {
      console.log('archived events', payload);
      state.allEvents.push(payload);
    });
  },
});
export const { setSelectedEvent } = eventSlice.actions;

export default eventSlice.reducer;
