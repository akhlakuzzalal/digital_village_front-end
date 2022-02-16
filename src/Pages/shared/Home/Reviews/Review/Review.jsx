import React from 'react';
//import icon
import { AiFillStar } from 'react-icons/ai';
//import image
import client from '../../../../../assets/reviews/review.jpg';

const Review = () => {
  return (
    <div className="w-3/4 static ">
      <div className="w-16 md:w-28  relative top-9 -right-10  md:top-44 md:right-11 ">
        <img
          className="w-full rounded-full border-4 border-white"
          src={client}
          alt=""
        />
      </div>
      <div className="bg-white  border-2 rounded-lg text-center py-9  md:py-16 px-0 md:px-8 border-secondary bg-slate-50">
        <ul className="flex justify-center text-yellow-400 heading_sm md:heading_md">
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
          <li>
            <AiFillStar />
          </li>
        </ul>

        <p className="Neutral-500 md:heading_sm px-0 md:px-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="text-white">- CEO ABC</p>
      </div>
    </div>
  );
};

export default Review;
