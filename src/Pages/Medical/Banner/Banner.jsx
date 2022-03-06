import React from 'react';
import Lottie from 'react-lottie';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/mediBanner.json';

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
      className="mt-[80px] mb-36 md:mb-24"
      style={{
        minHeight: isDesktop ? 'calc(100vh - 88px)' : 'fit-content',
      }}
    >
      {/* style={{ backgroundImage: isDesktop ? `url(${homeBg})` : 'none' }} */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-y-0 bg-no-repeat bg-left-top">
        {/* banner description */}
        <div className="w-full place-self-center lg:mt-24 order-1 text-center lg:text-left lg:ml-80">
          <h1>Quality Care</h1>
          <h3 className="my-6">
            <span className="text-primary">Your health</span> is our priority
          </h3>
          <p className="pb-3 w-4/6 text-sm font-extralight mt-3 text-gray-600">
            We the village administration provide quality services through this
            platform. Every villagers can fit their needs by utilizing the
            facilities we provide.
          </p>
          <div className="flex items-start">
            <NavHashLink smooth to="/#service">
              <button className="btn rounded-lg bg-primary">Services</button>
            </NavHashLink>
          </div>
        </div>

        {/* banner svg */}
        <div className="w-full pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-2 lg:order-3">
          <div className="w-fit mx-auto">
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              width={isDesktop ? 600 : isTablet ? 400 : 250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
