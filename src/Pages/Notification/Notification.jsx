import React, { useEffect, useState } from 'react';
import note from './../../assets/notification/notification.png';
import DetailNotification from './DetailNotification/DetailNotification';
import SingleNotification from './SingleNotification/SingleNotification';

const Notification = () => {
  const [notification, setNotification] = useState([]);
  const [details, setDetails] = useState([]);
  const [active, setActive] = useState(0);

  const handleDetails = (id) => {
    const newData = notification[id - 1];
    setDetails(newData);
    setActive(id);
  };

  useEffect(() => {
    fetch('./fakeNotifications.json')
      .then((res) => res.json())
      .then((data) => setNotification(data));
  }, []);

  return (
    <div
      className="flex justify-center bg-indigo-200 p-2 mt-[88px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      {/* notification cards */}
      <div className="w-100 md:w-1/2   ">
        {notification.map((note) => (
          <SingleNotification
            key={note.id}
            active={active}
            note={note}
            handleDetails={handleDetails}
          ></SingleNotification>
        ))}
      </div>

      {/* notification details */}
      <div className="w-100 md:w-1/2 p-2">
        {details.length === 0 ? (
          <div className="min-h-screen">
            <img className="w-full" src={note} alt="" />
          </div>
        ) : (
          <div className=" bg-slate-50 rounded-lg">
            <DetailNotification details={details}></DetailNotification>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
