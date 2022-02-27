import React from 'react';
import Calender from './../Calender/Calender';

const Schedule = ({ onChange }) => {
  return (
    <>
    <h1 className="text-center"> Take a schedule for a consultation</h1>
    <div className="flex justify-center items-center">
      <div className="w-full md: w-1/2 flex justify-center items-center">
        {' '}
        <Calender onChange={onChange} />
      </div>
      <div className="w-full md: w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Schedule;
