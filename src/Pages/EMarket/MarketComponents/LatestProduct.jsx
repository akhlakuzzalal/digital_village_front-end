import React from 'react';

const LatestProduct = ({ lastProduct }) => {
  return (
    <div
      className="mt-6 shadow-md rounded-lg overflow-hidden p-4 md:p-0"
      style={{ height: '88%' }}
    >
      <div
        className="w-full h-64 md:h-3/6 rounded-t-lg bg-cover bg-no-repeat hover:scale-105 transition-all duration-300"
        style={{ backgroundImage: `url('${lastProduct.image}')` }}
      ></div>
      <div className="text-center mt-6 mx-8">
        <h6>{lastProduct.title}</h6>
        <h6 className="text-yellow-500">$ 200</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          perspiciatis ratione voluptates officia nemo? Itaque.
        </p>
      </div>
      <div className="w-full flex justify-center mt-6">
        <button className="px-8 rounded-full py-2 bg-secondary">Buy now</button>
      </div>
    </div>
  );
};

export default LatestProduct;
