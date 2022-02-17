import React, { useState } from 'react';
import development from '../../../../assets/features/development.png';
import education from '../../../../assets/features/education.png';
import market from '../../../../assets/features/market.png';
import medical from '../../../../assets/features/medical.png';

const Features = () => {
  const [active, setActive] = useState(0);

  const scaleUpClasses =
    'transform scale-100 md:scale-125 transition-all duration-700';
  const scaleDownClasses = 'transform scale-100 transition-all duration-700';

  setTimeout(() => {
    if (active === 4) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, 1500);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 place-items-center text-center">
      {/* education */}
      <div
        className={`${
          active === 0 ? scaleUpClasses : active === 1 ? scaleDownClasses : ''
        } shadow-2xl w-32 sm:w-36`}
      >
        <div className="p-4 space-y-3 rounded-lg bg-white">
          <div>
            <img
              src={education}
              alt="home"
              className={`w-24 mx-auto ${active === 0 && 'animate-bounce'}`}
            />
          </div>
          <p>Quality Education</p>
        </div>
      </div>

      {/* development */}
      <div
        className={`${
          active === 1 ? scaleUpClasses : active === 2 ? scaleDownClasses : ''
        } shadow-2xl w-32 sm:w-36`}
      >
        <div className="p-4 space-y-3 rounded-lg bg-white">
          <div>
            <img
              src={development}
              alt="development"
              className={`w-24 mx-auto ${active === 1 && 'animate-bounce'}`}
            />
          </div>
          <p>Fast Development</p>
        </div>
      </div>

      {/* market */}
      <div
        className={`${
          active === 2 ? scaleUpClasses : active === 3 ? scaleDownClasses : ''
        } shadow-2xl w-32 sm:w-36`}
      >
        <div className="p-4 space-y-3 rounded-lg bg-white">
          <div>
            <img
              src={market}
              alt="market"
              className={`w-24 mx-auto ${active === 2 && 'animate-bounce'}`}
            />
          </div>
          <p>Necessary Commodities</p>
        </div>
      </div>

      {/* medical */}
      <div
        className={`${
          active === 3 ? scaleUpClasses : active === 4 ? scaleDownClasses : ''
        } shadow-2xl w-32 sm:w-36`}
      >
        <div className="p-4 space-y-3 rounded-lg bg-white">
          <div>
            <img
              src={medical}
              alt="home"
              className={`w-24 mx-auto ${active === 3 && 'animate-bounce'}`}
            />
          </div>
          <p>Medical Facilities</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
