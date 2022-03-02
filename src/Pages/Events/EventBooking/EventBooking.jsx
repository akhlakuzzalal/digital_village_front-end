import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllEvent } from '../../../redux/slices/event/eventSlice';

const EventBooking = () => {
  const { eventBookingId } = useParams();
  const allEvent = useSelector((state) => state.events.allEvents);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEvent());
  }, []);
  const exactItem = allEvent?.filter((pd) => pd._id === eventBookingId);

  //   const {
  //     register,
  //     formState: { errors },
  //     reset,
  //     handleSubmit,
  //   } = useForm();

  //   const handleAddBookingEvent = (data) => {
  //     dispatch(addAnEvent(data));
  //     alert('successfully added');
  //   };
  return (
    <div>
      <img className="w-full h-[500px]" src={exactItem[0]?.image} alt="" />
    </div>
  );
};

export default EventBooking;
