import React from 'react';
import img from '../../assets/events/tomato-removebg-preview.png';
const HotOffer = () => {
  return (
    <div className=" lg:flex lg:my-40 lg:mx-20 mx-5">
      <div className="lg:px-20 lg:w-[50%] w-full space-y-8 mt-[100px]">
        <h5 className="lg:text-6xl text-xl">Tomato this is the product</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          architecto veritatis officia dolores iure voluptatibus nam blanditiis
          maiores perferendis rerum.
        </p>
        <button className="bg-indigo-200 px-10 py-3">Add To Cart</button>
      </div>
      <div>
        {' '}
        <img className="mt-[80px] lg:mt-0" src={img} alt="" />
        <div className="mx-8 my-5">
          <p className="lg:text-3xl">Only Today</p>
          <p className="lg:text-4xl ml-5">$111</p>
        </div>
        <h5 className="bg-[yellow] px-5 lg:py-10 py-5 rounded-full lg:w-40 w-20 lg:text-4xl  relative lg:bottom-[490px] bottom-[300px] lg:left-[460px] left-[150px]">
          Hot Offer
        </h5>
      </div>
    </div>
  );
};

export default HotOffer;
