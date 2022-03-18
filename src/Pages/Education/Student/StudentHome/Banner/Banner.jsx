import React from 'react';
import Lottie from 'react-lottie';
import background from '../../../../../assets/education/blue_bg-removebg-preview.png';
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
    <div className="flex flex-wrap lg:h-[80vh] bg-gray-50">
      <div
        // style={{
        //   backgroundImage: `url(${background})`,
        //   backgroundRepeat: 'no-repeat',
        //   height: '50vh',
        // }}
        className="w-full md:w-1/2 place-self-center pl-6 space-y-7 order-2 md:order-1"
      >
        <img className="w-[100vh] h-[70vh] " src={background} alt="" />
        <div className="relative lg:bottom-[400px] bottom-[330px]  space-y-7 pl-7">
          <h1 className="text-[#2d3748] capitalize  text-sm md:text-2xl lg:text-5xl  ">
            Gain valuable knowledge
            <br /> from our content
          </h1>
          <p className="w-5/6  text-sm md:text-xl lg:text-xl mt-3">
            We have loads of resources created by the village teacher for
            sharing knowledge amongst the village students.
          </p>
          <button className="px-10 py-4 bg-[blue] text-white">
            Learn More
          </button>
        </div>
      </div>
      {/* lottie files */}
      <div className="w-full md:w-1/2 pointer-events-none order-1 md:order-2 ">
        <div className="w-fit mx-auto ">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={isDesktop ? 800 : isTablet ? 400 : 250}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
