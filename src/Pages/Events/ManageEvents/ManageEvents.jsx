import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllEvent } from '../../../redux/slices/event/eventSlice';
import ManageEventsCard from './ManageEventsCard';
const ManageEvents = () => {
  const allEvent = useSelector((state) => state.events.allEvents);
  const [deleteEvent, setDeleteEvent] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvent());
    setDeleteEvent(0);
  }, [deleteEvent]);

  return (
    <div>
      <h1 className="lg:ml-52 mt-44">You Can Delete Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 pt-20 pb-20 lg:mx-[210px] mx-5">
        {allEvent.map((event) => (
          <ManageEventsCard
            key={event._id}
            event={event}
            setDeleteEvent={setDeleteEvent}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
