import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNotifications } from '../../redux/slices/notification/notificationSlice';
import note from './../../assets/notification/notification.png';
import DetailNotification from './DetailNotification/DetailNotification';
import SingleNotification from './SingleNotification/SingleNotification';

const Notification = () => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const [activeNotification, setActiveNotification] = useState({});

  const dispatch = useDispatch();

  const handleActiveNotification = (id) => {
    const selectedNotificaion = notifications.filter(
      (notification) => notification._id === id
    );
    console.log(...selectedNotificaion);
    setActiveNotification(...selectedNotificaion);
  };

  useEffect(() => {
    dispatch(fetchAllNotifications());
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center p-4 mt-[88px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      {/* notification cards */}
      <div className="w-100 md:w-1/2 space-y-4 flex-1">
        {notifications.map((note, i) => (
          <SingleNotification
            key={note._id}
            note={note}
            handleDetails={handleActiveNotification}
          ></SingleNotification>
        ))}
      </div>

      {/* notification details */}
      <div className="w-100 md:w-1/2 p-2">
        {activeNotification.length === 0 ? (
          <div className="min-h-screen">
            <img className="w-full" src={note} alt="" />
          </div>
        ) : (
          <DetailNotification
            activeNotification={activeNotification}
          ></DetailNotification>
        )}
      </div>
    </div>
  );
};

export default Notification;
