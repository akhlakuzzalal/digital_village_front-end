import React from 'react';

const MarketBanner = () => {
  return (
    <div className="w-full px-2 h-2/3 bg-gradient-to-r from-purple-500 to-pink-500 mb-9">
      {/* 1st column */}
      <div className="grid grid-cols-3 justify-around h-64">
        <div className="w-full hidden md:flex justify-center">
          <img
            className="h-64"
            src="https://i.ibb.co/VxyJrfm/shoping-prev-ui.png"
            alt=""
          />
        </div>
        {/* 2nd column */}
        <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center">
          <h3 className="animate-bounce text-white text-3xl md:text-5xl">Welcome to Village market</h3>
          <p>You can buy the available product from here</p>
        </div>
        {/* 3rd column */}
        <div className="w-full flex justify-center items-center">
          <img
            className="h-4/5 md:h-64"
            src="https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MarketBanner;
