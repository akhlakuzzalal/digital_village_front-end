import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/village.json';
import Features from '../Features/Features';

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    controls: true,
  };
  return (
    // calculate using calc then give it the height like: calc(100vh - 'heading height')
    <div className="min-h-screen md:h-[calc(100vh-5rem)] md:pt-0">
      {/* part 1 */}
      <div className="space-y-6 md:space-y-0 flex flex-wrap">
        {/* banner description */}
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24">
          <h1 className="text-[#0e1318]">Digital Village</h1>
          <p className="text-[#3f5a46] w-2/3 mx-auto md:mx-0 md:w-[250px] capitalize">
            Transforming an analog village into a digital one
          </p>
          <button className="btn bg-gradient-to-r from-secondary via-primary to-secondary hover:from-primary hover:via-secondary hover:to-primary shadow-xl">
            Explore
          </button>
        </div>
        {/* banner svg */}
        <div className="w-full md:w-1/2">
          {/* <img src={banner} alt="village" className="w-full" /> */}
          <Lottie options={defaultOptions} height={480} className="w-1/2" />
          <Features />
        </div>
      </div>
      {/* <div className="mr-0 md:mr-20 mt-0 md:-mt-16">
        <Features />
      </div> */}
    </div>
  );
};

export default Banner;
