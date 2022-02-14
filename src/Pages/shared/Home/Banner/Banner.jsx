import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/village.json';

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="mt-[88px]" style={{ height: 'calc(100vh)' }}>
      <div className="space-y-6 md:space-y-0 flex flex-wrap">
        {/* banner description */}
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24">
          <h1 className="text-[#0e1318]">Digital Village</h1>
          <p className="text-[#3f5a46] w-2/3 mx-auto md:mx-0 md:w-[300px] capitalize">
            Transforming an analog village into a digital one
          </p>
          <button className="btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
            Explore
          </button>
        </div>
        {/* banner svg */}
        <div className="w-full md:w-1/2" style={{ pointerEvents: 'none' }}>
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={650}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
