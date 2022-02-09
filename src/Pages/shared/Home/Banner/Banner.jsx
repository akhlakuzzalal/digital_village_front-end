import React from 'react';
import village from '../../../../assets/village.jpg';
import Features from '../Features/Features';

const Banner = () => {
  return (
    // calculate using calc then give it the height like: calc(100vh - 'heading height')
    <div className="min-h-screen">
      {/* part 1 */}
      <div>
        {/* banner description */}
        <div className="space-y-3 text-center bg-red-300">
          <h1 className="heading_md text-[#0e1318]">Digital Village</h1>
          <p className="text-[#3f5a46]">
            Transforming an analog village into a digital one
          </p>
          <button className="btn bg-gradient-to-tr hover:bg-gradient-to-tl from-primary via-secondary to-green-500 shadow-xl">
            Explore
          </button>
        </div>
        {/* banner svg */}
        <div>
          <img src={village} alt="village" className="w-full" />
        </div>
      </div>
      <div>
        <div className="bg-red-700">
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Banner;
