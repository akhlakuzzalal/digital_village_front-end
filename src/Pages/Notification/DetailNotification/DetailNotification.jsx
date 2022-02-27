import React from 'react';

const DetailNotification = ({
  activeNotification: { title, date, description },
}) => {
  return (
    <div className="bg-slate-100 rounded-lg p-6 shadow-xl h-full">
      <h3>{title}</h3>
      <small>Date: {date} </small>
      <p>{description}</p>
    </div>
  );
};

export default DetailNotification;
