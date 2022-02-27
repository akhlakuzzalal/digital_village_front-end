import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedNotification } from '../../../redux/slices/notification/notificationSlice';

const SingleNotification = ({ notification: { title, date, _id }, active }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        active === _id && 'border-2 border-primary'
      } bg-slate-50 rounded-lg p-5 my-2 cursor-pointer shadow-2xl`}
      onClick={() => dispatch(setSelectedNotification(_id))}
    >
      <h3>{title}</h3>
      <p>Date: {date} </p>
    </div>
  );
};

export default SingleNotification;
