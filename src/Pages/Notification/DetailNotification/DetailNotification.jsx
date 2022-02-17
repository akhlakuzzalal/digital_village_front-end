import React from 'react';

const DetailNotification = ({ details: { title, date, description } }) => {
  return (
    <div className="bg-slate-50 rounded-lg p-5 my-2">
      <h1>{title}</h1>
      <small>Date: {date} </small>
      <p>{description}</p>
    </div>
  );
};

export default DetailNotification;
