import React from 'react';
import Lottie from 'react-lottie';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/donate.json';

const DonateBanner = () => {
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
      className="mt-[80px] bg-gray-700 bg-no-repeat bg-cover bg-center px-10 object-fill"
      style={{
        height: 'calc(100vh - 88px)',
        backgroundImage:
          'url(http://nasarna-react.wpocean.com/static/media/img-1.c4e303eb.jpg)',
      }}
    >
      <div className="flex flex-wrap md:space-y-0">
        {/* banner description */}
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24 pt-12 mb-3">
          <h1 className="text-[#ffffff] text-4xl">Donate for helpless</h1>
          <p className="text-[#3f5a46] mx-auto md:mx-0 md:w-[420px] capitalize pb-3">
            Charitable giving is the act of giving money,Help to those in need,
            as a humanitarian act
          </p>
          <NavHashLink smooth to="/#">
            <button className="btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
              Donate Now
            </button>
          </NavHashLink>
        </div>
        {/* banner svg */}
        <div className="w-full md:w-1/2 px-3">
          <Lottie
            options={defaultOptions}
            width={350}
            isClickToPauseDisabled={true}
            height={isDesktop ? 400 : isTablet ? 400 : 300}
          />
        </div>
      </div>
    </div>
  );
};

export default DonateBanner;
