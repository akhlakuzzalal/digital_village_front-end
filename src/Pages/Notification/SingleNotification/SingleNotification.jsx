import React from 'react';

const SingleNotification = (props) => {
  const { id, Title, date } = props.note;

  return (
    <div className="bg-slate-50 rounded-lg p-5 my-2">
      <h3>{Title}</h3>
      <p>Date: {date} </p>
      <span>
        <button
          onClick={() => {
            props.handleDetails(id);
          }}
        >
          see details...
        </button>
      </span>
    </div>
  );
};

export default SingleNotification;
