import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
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
      <h1 className="flex space-x-3 text-xl ml-5 mt-10">
        Delete Exixting Events{' '}
        <AiFillDelete color="red" className="animate-bounce mt-2" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 py-20 lg:mx-[150px] mx-5">
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
