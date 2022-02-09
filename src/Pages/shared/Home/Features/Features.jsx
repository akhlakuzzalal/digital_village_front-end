import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import homeIcon from '../../../../assets/homeIcon.png';

const Features = () => {
  const [active, setActive] = useState(0);

  let scaleUpClasses = 'transform scale-125 transition-all duration-700';
  let scaleDownClasses = 'transform scale-100 transition-all duration-700';

  setTimeout(() => {
    if (active === 4) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, 1500);

  return (
    <div className="flex justify-evenly gap-6 flex-wrap">
      {/* feature 1 */}
      <div
        className={`${
          active === 0 ? scaleUpClasses : active === 1 ? scaleDownClasses : ''
        } shadow-2xl`}
      >
        <div className="p-4 bg-slate-200 space-y-3 rounded-lg">
          <div>
            <img
              src={homeIcon}
              alt="home"
              className={`w-24 ${active === 0 && 'animate-bounce'}`}
            />
          </div>
          <p>Village Market</p>
          <div className="w-fit ml-auto">
            <IoIosArrowDroprightCircle size={50} className="text-primary" />
          </div>
        </div>
      </div>

      {/* feature 2 */}
      <div
        className={`${
          active === 1 ? scaleUpClasses : active === 2 ? scaleDownClasses : ''
        } shadow-2xl`}
      >
        <div className="p-4 bg-slate-200 space-y-3 rounded-lg">
          <div>
            <img
              src={homeIcon}
              alt="home"
              className={`w-24 ${active === 1 && 'animate-bounce'}`}
            />
          </div>
          <p>Village Market</p>
          <div className="w-fit ml-auto">
            <IoIosArrowDroprightCircle size={50} className="text-primary" />
          </div>
        </div>
      </div>

      {/* feature 3 */}
      <div
        className={`${
          active === 2 ? scaleUpClasses : active === 3 ? scaleDownClasses : ''
        } shadow-2xl`}
      >
        <div className="p-4 bg-slate-200 space-y-3 rounded-lg">
          <div>
            <img
              src={homeIcon}
              alt="home"
              className={`w-24 ${active === 2 && 'animate-bounce'}`}
            />
          </div>
          <p>Village Market</p>
          <div className="w-fit ml-auto">
            <IoIosArrowDroprightCircle size={50} className="text-primary" />
          </div>
        </div>
      </div>

      {/* feature 4 */}
      <div
        className={`${
          active === 3 ? scaleUpClasses : active === 4 ? scaleDownClasses : ''
        } shadow-2xl`}
      >
        <div className="p-4 bg-slate-200 space-y-3 rounded-lg">
          <div>
            <img
              src={homeIcon}
              alt="home"
              className={`w-24 ${active === 3 && 'animate-bounce'}`}
            />
          </div>
          <p>Village Market</p>
          <div className="w-fit ml-auto">
            <IoIosArrowDroprightCircle size={50} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
