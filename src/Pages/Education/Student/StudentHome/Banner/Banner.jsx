import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../../hooks/useMediaQuery';
import animationData from '../../../../../lotties/education.json';

const Banner = () => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 place-self-center pl-6 space-y-3">
        <h1 className="text-[#2d3748] capitalize">
          Gain valuable knowledge from our content
        </h1>
        <p className="w-5/6">
          We have loads of resources created by the village teacher for sharing
          knowledge amongst the village students.
        </p>
      </div>
      {/* lottie files */}
      <div className="w-full md:w-1/2 pointer-events-none">
        <div className="w-fit mx-auto">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={isDesktop ? 500 : isTablet ? 400 : 250}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
