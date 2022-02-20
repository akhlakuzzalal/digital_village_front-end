import React from 'react';
import Lottie from 'react-lottie';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/village.json';

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
    <div
      className="mt-[88px] mb-36 md:mb-24"
      style={{ height: 'calc(100vh - 88px)' }}
    >
      <div className="flex flex-wrap md:space-y-0">
        {/* banner description */}
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24 pt-12 mb-3">
          <h1 className="text-[#0e1318]">Digital Village</h1>
          <p className="text-[#3f5a46] w-2/3 mx-auto md:mx-0 md:w-[300px] capitalize pb-3">
            Transforming an analog village into a digital one
          </p>
          <NavHashLink smooth to="/#service">
            <button className="btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
              Services
            </button>
          </NavHashLink>
        </div>
        {/* banner svg */}
        <div className="w-full md:w-1/2 px-3 pointer-events-none">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={isDesktop ? 500 : isTablet ? 400 : 300}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
