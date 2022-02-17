import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Rating = ({ rating }) => {
  const starArr = [];
  let element;
  let i = 0;

  for (i; i < rating; i++) {
    element = <AiFillStar />;
    starArr.push(element);
  }
  return starArr;
};

export default Rating;
