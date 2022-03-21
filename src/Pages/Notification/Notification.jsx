import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserSpecificNotification } from '../../redux/slices/notification/notificationSlice';
import note from './../../assets/notification/notification.png';
import DetailNotification from './DetailNotification/DetailNotification';
import SingleNotification from './SingleNotification/SingleNotification';

const Notification = () => {
  const user = useSelector((state) => state.user.user);

  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  // get the currently selected notifcation from redux store
  const selectedNotification = useSelector(
    (state) => state.notifications.selectedNotification
  );

  const dispatch = useDispatch();

  console.log(notifications);

  useEffect(() => {
    dispatch(fetchUserSpecificNotification(user.email));
  }, []);

  return (
    <div
      className="flex flex-wrap justify-center p-4 mt-[80px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      {/* notification cards */}
      <div className="w-100 md:w-1/2 space-y-4 flex-1">
        {notifications && notifications.length >= 1 ? (
          notifications.map((notification, i) => (
            <SingleNotification
              key={notification._id}
              notification={notification}
            ></SingleNotification>
          ))
        ) : (
          <p className="text-center">No notifications available</p>
        )}
      </div>

      {/* notification details */}
      <div className="w-100 md:w-1/2 p-2">
        {Object.keys(selectedNotification).length === 0 ? (
          <div className="min-h-screen">
            <img className="w-full" src={note} alt="" />
          </div>
        ) : (
          <DetailNotification
            selectedNotification={selectedNotification}
          ></DetailNotification>
        )}
      </div>
    </div>
  );
};

export default Notification;
