import React from 'react';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../../../../hooks/useMediaQuery';
import animationData from './../../../../../../../lotties/appointment.json';
import Calender from './../Calender/Calender';

const Schedule = ({ onChange }) => {
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
    <div className="my-10 w-full">
      <h3
        className="text-center text-2xl md:text-4xl pt-12"
        style={{
          color: '#10217d',
        }}
      >
        {' '}
        Take a schedule for a consultation
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="">
          {' '}
          <Calender onChange={onChange} />
        </div>
        <div className=" pointer-events-none ">
          <div className=" ml-5">
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

export default Schedule;