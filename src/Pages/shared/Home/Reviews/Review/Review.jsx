import React from 'react';
import Rating from './../../../../../Components/Rating';

const Review = ({ reviews }) => {
  const { name, description, rating, image } = reviews;

  return (
    <div className="md:pb-12 w-full">
      <div className="w-full md:w-28 relative top-8 left-40 md:top-12 md:left-34 ">
        <img
          className="w-full rounded-full border-4 border-slate-200 dark:border-secondary"
          src={image}
          alt=""
        />
      </div>
      <div className="bg-white dark:dark-card-bg dark:border-secondary shadow-md border-4 rounded-lg text-center py-9  md:py-16 px-8  border-slate-50 w-full md:w-[420px] ">
        <div className="flex justify-center text-yellow-400 heading_sm md:heading_md">
          <Rating rating={reviews?.rating} />
        </div>

        <p className="Neutral-500 md:heading_sm px-0 md:px-8">
          {reviews?.description && reviews.description.slice(0, 30)}.
        </p>
        <p className="text-primary">- {reviews?.name}</p>
      </div>
    </div>
  );
};

export default Review;
