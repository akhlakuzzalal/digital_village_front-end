import React from 'react';
import client from '../../../assets/reviews/review.jpg';

const SingleComment = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-row md:w-3/4  justify-center items-center border-2 border-slate-300 bg-slate-50 rounded-lg p-5 my-2">
        <div className="w-16 md:w-28">
          <img
            className="w-full rounded-full border-4 border-slate-300"
            src={client}
            alt=""
          />
        </div>
        <div className="w-3/4 md:w-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          voluptatibus esse .
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
