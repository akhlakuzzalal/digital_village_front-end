import React from 'react';

const DetailNotification = (props) => {
  const { Title, date, description } = props.details;
  return (
    <div className="bg-slate-50 rounded-lg p-5 my-2">
      <h1>{Title}</h1>
      <small>Date: {date} </small>
      <p>{description}</p>
    </div>
  );
};

export default DetailNotification;
