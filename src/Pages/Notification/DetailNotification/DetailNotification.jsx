import React from 'react';

const DetailNotification = ({ selectedNotification }) => {
  console.log(selectedNotification);
  return (
    <div className="bg-slate-100 rounded-lg p-6 shadow-xl h-full">
      <h3>{selectedNotification?.title}</h3>
      <small>Date: {selectedNotification?.date} </small>
      <p>{selectedNotification?.description}</p>
    </div>
  );
};

export default DetailNotification;
