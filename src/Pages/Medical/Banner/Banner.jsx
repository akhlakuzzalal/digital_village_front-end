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
      // style={{
      //   backgroundImage: `url(${background})"`,
      //   backgroundRepeat: 'no-repeat',
      //   width: '100vh',
      // }}
      className="mb-10 md:mb-24 w-[100%] lg:h-[100vh] dark:bg-dark_primary bg-gray-100 "
      // style={{
      //   backgroundColor: '#f7f8fa',
      // }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center pl-14 pr-2 py-0 md:p-10 space-y-6">
        {/* banner description */}
        <div className=" lg:ml-[100px] lg:mt-[100px] space-y-3 mt-10 mx-6 lg-mx-0 ">
          <h1 className=" text-2xl lg:text-4xl md:text-5xl my-0 md:my-3 ">
            Quality Care
          </h1>
          <h3 className="justify-center items-center text-xl lg:text-3xl">
            <span style={{ color: '#10217d' }}>Your health, </span> our priority
          </h3>
          <p className=" my-2 text-justify md:text-left md:my-6">
            From preventive care and checkups, to immunizations and exams, our
            primary care physicians and providers work to keep you and your
            whole family healthy and strong each and every day.{' '}
          </p>
          <div className="flex items-start">
            <NavHashLink smooth to="/medical/appointment">
              <button className="btn text-md md:text-lg rounded-lg px-6 border-4 text-black hover:text-white bg-primary">
                Book Appointment
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
              width={isDesktop ? 700 : isTablet ? 400 : 200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
