import React from 'react';

const SingleNotification = ({
  note: { title, date, _id },
  handleDetails,
  active,
}) => {
  return (
    <div
      className={`${
        active === _id && 'border-2 border-primary'
      } bg-slate-50 rounded-lg p-5 my-2 cursor-pointer shadow-2xl`}
      onClick={() => handleDetails(_id)}
    >
      <h3>{title}</h3>
      <p>Date: {date} </p>
    </div>
  );
};

export default SingleNotification;
