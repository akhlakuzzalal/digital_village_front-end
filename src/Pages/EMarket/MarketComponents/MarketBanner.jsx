import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import animationData from '../../../lotties/market-banner.json';

const MarketBanner = () => {
  const cart = useSelector((state) => state.market.cart.cart);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      className="bg-no-repeat bg-opacity-0 dark:bg-opacity-100 bg-cover h-[200px] md:h-[300px] mb-12"
      style={{
        backgroundImage: 'url(https://i.ibb.co/pzhw70W/market-banner.png)',
      }}
    >
      <div className="grid grid-cols-3 md:justify-around h-[300px] pb-2">
        {/* 1st column */}
        <div className="w-full hidden md:flex justify-center">
          <img
            className="h-[300px]"
            src="https://i.ibb.co/VxyJrfm/shoping-prev-ui.png"
            alt=""
          />
        </div>
        {/* 2nd column */}
        <div className="flex relative w-full flex-col col-span-2 md:col-span-1 justify-center items-center">
          <div className="absolute w-full text-center top-0 mt-6 text-black font-semibold space-x-4">
            <Link to="/cart">
              <p className="relative inline ">
                Cart{' '}
                <small className="absolute -top-2 -right-2 font-extrabold text-red-700">
                  {cart.length}
                </small>
              </p>
            </Link>
            <Link to="/marketdashboard">
              <p className="inline right-4"> Dashboard</p>
            </Link>
            <Link to="/medicinestore">
              <p className="inline right-2">Medicine Store</p>
            </Link>
          </div>
          <h3 className="md:animate-bounce text-xl md:text-4xl mx-2">Welcome to Village market</h3>
          <p className='mx-2'>You can buy the available product from here</p>
        </div>
        {/* 3rd column */}
        <div className="hidden w-11/12 md:flex justify-center h-[300px] mb-12">
          <Lottie
            // style={{ width: '60%' }}
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={'60%'}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketBanner;
