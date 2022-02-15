import React from 'react';

const MarketBanner = () => {
  return (
    <div className="w-full h-2/3 bg-gradient-to-r from-purple-500 to-pink-500 mb-9">
      <div className="grid grid-cols-3 justify-around h-64">
        <div className="w-full flex justify-center">
          <img
            className="h-64"
            src="https://i.ibb.co/VxyJrfm/shoping-prev-ui.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="animate-bounce">Welcome to Village market</h3>
          <p>You can buy the available product from here</p>
        </div>
        <div className="w-full flex justify-center">
          <img
            className="h-64"
            src="https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MarketBanner;
