import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Rating = ({ rating }) => {
  const starArr = [];

  let element;

  for (let i = 0; i < rating; i++) {
    element = <AiFillStar key={i} size={20} />;
    starArr.push(element);
  }
  return starArr;
};

export default Rating;
