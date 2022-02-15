import React from 'react';
//import icon
import { AiFillStar } from 'react-icons/ai';
//import image
import client1 from '../../../../../Images/review.jpg';

const Review = () => {
  return (
    <div className="w-3/4 static hidden">
      <div className="w-16 md:w-28  relative top-9 -right-6  md:top-44 md:right-11 ">
        <img
          className="w-full rounded-full border-4 border-lime-500"
          src={client1}
          alt=""
        />
      </div>
      <div className="bg-white border-2 rounded-lg text-center py-9  md:py-16 shadow-lg shadow-lime-500 border-lime-500">
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
        <p className="text-lime-500">- CEO ABC</p>
      </div>
    </div>
  );
};

export default Review;
