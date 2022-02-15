import React, { useEffect, useState } from 'react';
import note from './../../../Images/notification.png';
import DetailNotification from './../DetailNotification/DetailNotification';
import SingleNotification from './../SingleNotification/SingleNotification';

const MainNotification = () => {
  const [notification, setNotification] = useState([]);
  const [details, setDetails] = useState([]);
  const handleDetails = (data) => {
    const newData = notification[data - 1];
    console.log(newData);
    setDetails(newData);
  };
  console.log(details);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setNotification(data));
  }, []);
  return (
    <div className="flex justify-center bg-indigo-200 p-2 ">
      <div className="w-100 md:w-1/2   ">
        {notification.map((note) => (
          <SingleNotification
            key={note.id}
            note={note}
            handleDetails={handleDetails}
          ></SingleNotification>
        ))}
      </div>
      <div className="w-100 md:w-1/2 p-5 p-2">
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

export default MainNotification;
