import React from 'react';
import client from './../../../../../assets/reviews/review.jpg';
import Rating from './../../../../../Components/Rating';

const Review = ({ reviews }) => {
  const { name, description, rating } = reviews;
  console.log(description);
  console.log(reviews);

  return (
    <div className=" px-[30px] ">
      <div className="w-16 md:w-28  relative top-9 md:top-44 md:right-11 ">
        <img
          className="w-full rounded-full border-4 border-slate-200"
          src={client}
          alt=""
        />
      </div>
      <div className="bg-white shadow-2xl border-4 rounded-lg text-center py-9  md:py-16 px-8  border-slate-50 w-[400px]">
        <div className="flex justify-center text-yellow-400 heading_sm md:heading_md">
          <Rating rating={rating} />
        </div>

        <p className="Neutral-500 md:heading_sm px-0 md:px-8">{description}.</p>
        <p className="text-primary">- {name}</p>
      </div>
    </div>
  );
};

export default Review;
