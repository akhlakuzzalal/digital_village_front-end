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
    <div className="my-10">
      <h3
        className="text-center text-4xl my-8"
        style={{
          color: '#10217d',
        }}
      >
        {' '}
        Take a schedule for a consultation
      </h3>
      <div className="flex justify-center items-center">
        <div className="w-full md: w-1/2 flex justify-center items-center p-10">
          {' '}
          <Calender onChange={onChange} />
        </div>
        <div className="w-full pointer-events-none  lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 order-2 lg:order-3">
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

export default Schedule;
