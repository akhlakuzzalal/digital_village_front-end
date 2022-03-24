import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import social  from '../../../../assets/social.gif'

const SocialBanner = () => {
  
    return (
      <div
        className="py-3"
        
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center lg:space-y-0 bg-no-repeat bg-left-top"
        >
          {/* banner description */}
          <div className="w-full mx-auto lg:mx-0 place-self-center mt-6 lg:mt-24 order-1 text-center lg:text-left lg:ml-80">
            <h1 className='text-3xl md:text-5xl'>Digital Village</h1>
            <p className="pb-3 w-5/6 md:w-4/6  mx-auto lg:mx-0 text-sm text-center md:text-left font-extralight mt-3 text-gray-600">
              We the village administration provide quality services through this
              platform. Every villagers can fit their needs by utilizing the
              facilities we provide.
            </p>
            <div className="flex items-start justify-center md:justify-start">
              <NavHashLink smooth to="/social">
                <button className="btn rounded-lg bg-primary dark:bg-dark_secondary">
                Connecting Now
                </button>
              </NavHashLink>
            </div>
          </div>
          {/* banner svg */}
          <div className="w-full pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-2 lg:order-3">
            <div className="w-fit mx-auto">
              <img src={social} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default SocialBanner;