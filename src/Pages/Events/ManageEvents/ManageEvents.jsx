import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../assets/events/who we are.jpg';
import { fetchAllEvent } from '../../../redux/slices/event/eventSlice';
import ManageEventsCard from './ManageEventsCard';
const ManageEvents = () => {
  const allEvent = useSelector((state) => state.events.allEvents);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvent());
  }, []);

  return (
    <div>
      <div>
        <img className="w-full h-[400px]" src={img} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 pt-40 lg:mx-[250px] mx-5">
        {allEvent.map((event) => (
          <ManageEventsCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
