import React from 'react';

const RegularProduct = ({ product }) => {
  return (
    <div>
      <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl hover:scale-105 duration-500">
        <div className="w-full flex justify-center ">
          <img
            className="w-4/5 h-40"
            src={product.image}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <h6 className="text-yellow-500 text-center">$ 120</h6>
          <div className="font-bold text-xl mb-2 text-center">Product name</div>
        </div>
      </div>
    </div>
  );
};

export default RegularProduct;
