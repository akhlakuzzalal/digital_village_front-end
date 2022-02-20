import React from 'react';
import client from './../../../../../assets/reviews/review.jpg';
import Rating from './../../../../../components/Rating';

const Review = () => {
  const rate = { rating: 4 };
  return (
    <div className="w-3/4 static ">
      <div className="w-16 md:w-28  relative top-9 -right-10  md:top-44 md:right-11 ">
        <img
          className="w-full rounded-full border-4 border-slate-200"
          src={client}
          alt=""
        />
      </div>
      <div className="bg-white  border-4 rounded-lg text-center py-9  md:py-16 px-0 md:px-8 border-slate-50">
        <div className="flex justify-center text-yellow-400 heading_sm md:heading_md">
          <Rating rating={rate.rating} />
        </div>

        <p className="Neutral-500 md:heading_sm px-0 md:px-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="text-white">- CEO ABC</p>
      </div>
    </div>
  );
};

export default Review;
