import React from 'react';
import schedule from './../../../../../../../assets/medical/schedule.png';
import Calender from './../Calender/Calender';

const Schedule = ({ onChange }) => {
  return (
    <div className="my-10">
      <h3 className="text-center text-4xl my-8">
        {' '}
        Take a schedule for a consultation
      </h3>
      <div className="flex justify-center items-center">
        <div className="w-full md: w-1/2 flex justify-center items-center">
          {' '}
          <Calender onChange={onChange} />
        </div>
        <div className="w-full md: w-1/2 flex justify-center items-center">
          {' '}
          <img src={schedule} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
