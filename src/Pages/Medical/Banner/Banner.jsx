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
      className=" mb-10 md:mb-24 w-[100%]"
      style={{
        backgroundColor: '#f7f8fa',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10">
        {/* banner description */}
        <div className=" flex flex-col  justify-center items-center place-self-center lg:mt-24 order-2 md:order-1 text-center lg:text-left p-5">
          <h1 className=" text-4xl md:text-5xl my-0 md:my-3">Quality Care</h1>
          <h3 justify-center items-center>
            <span style={{ color: '#10217d' }}>Your health, </span> our priority
          </h3>
          <p className=" my-2 text-justify md:text-left md:my-6">
            From preventive care and checkups, to immunizations and exams, our
            primary care physicians and providers work to keep you and your
            whole family healthy and strong each and every day.{' '}
          </p>
          <div className="flex items-start">
            <NavHashLink smooth to="/medicalDashboard">
              <button
                className="btn rounded-lg px-6 "
                style={{ backgroundColor: '#10217d' }}
              >
                Explore
              </button>
            </NavHashLink>
          </div>
        </div>

        {/* banner svg */}
        <div className="w-full pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-1 md:order-2 lg:order-3">
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
