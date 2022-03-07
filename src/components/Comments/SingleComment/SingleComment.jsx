import React from 'react';
import client from '../../../assets/reviews/review.jpg';

const SingleComment = ({ message }) => {
  return (
    <div>
      <div className="w-full flex flex-row md:w-3/4  justify-center items-center border-2 border-slate-300 bg-slate-50 rounded-lg p-5 my-2 gap-4">
        <div className="w-16 md:w-28">
          <img
            className="w-full rounded-full border-4 border-slate-300"
            src={client}
            alt=""
          />
        </div>
        <div className="w-3/4 md:w-full">{message}</div>
      </div>
    </div>
  );
};

export default SingleComment;
