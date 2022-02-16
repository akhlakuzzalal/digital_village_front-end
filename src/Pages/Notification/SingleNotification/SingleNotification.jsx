import React from 'react';

const SingleNotification = ({
  note: { id, title, date, description },
  handleDetails,
  active,
}) => {
  return (
    <div
      className={`${
        active === id && 'border-2 border-primary'
      } bg-slate-50 rounded-lg p-5 my-2 cursor-pointer`}
      onClick={() => handleDetails(id)}
    >
      <h3>{title}</h3>
      <p>Date: {date} </p>
      <span>
        <button
          onClick={() => {
            handleDetails(id);
          }}
        >
          see details...
        </button>
      </span>
    </div>
  );
};

export default SingleNotification;
