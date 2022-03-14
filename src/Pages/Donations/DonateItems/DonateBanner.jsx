import React from 'react';
import Lottie from 'react-lottie';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/donate.json';
import banner from '../../../assets/donation/donatebanner.jpg';

const DonateBanner = () => {
  const isTablet = useMediaQuery('(min-width: 655px)');
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
      className="w-full bg-cover bg-center mt-[64px]"
      style={{
        width:'100%',
        // backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: 'calc(105vh - 64px)',
        position:'relative',
        backgroundImage:
          `url(${banner})`,
      }}
    >
      <div className="flex flex-wrap md:space-y-0">
        {/* banner description */}
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24 pt-12 mb-3">
          <h1 className="text-[#ffffff] text-sm md:text-2xl lg:text-4xl">Donate for helpless</h1>
          <p className="text-[#3f5a46] text-sm md:text-xl lg:text-2xl mx-auto md:mx-0 md:w-[420px] capitalize pb-3">
            Charitable giving is the act of giving money,Help to those in need,
            as a humanitarian act
          </p>
          <div className="items-center justify-between pt-2 gap-1 mx-auto space-y-6 sm:flex sm:items-center sm:py-3 sm:space-y-0 sm:space-x-4">
          <NavHashLink smooth to="/#">
            <button className="btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
              Donate Now
            </button>
          </NavHashLink>
          {/* <NavHashLink smooth to="/#">
            <button className="btn bg-gradient-to-r from-primary via-secondary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
            Get Help Request
            </button>
          </NavHashLink> */}
          </div>
          
        </div>
        {/* banner svg */}
        <div className="w-full md:w-1/2 px-3 sm:px-0 sm:w-2/1 hidden lg:block">
          <Lottie
            options={defaultOptions}
            width={340}
            isClickToPauseDisabled={true}
            height={isDesktop ? 390 : isTablet ? 390 : 280}
          />
        </div>
      </div>
    </div>
  );
};

export default DonateBanner;
