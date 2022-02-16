import React from 'react';

const SingleNotification = (props) => {
  const { id, Title, date } = props.note;

  return (
    <div className="bg-slate-50 border-2 border-slate-300   rounded-lg p-5 my-2 mx-0 md:mx-5">
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
