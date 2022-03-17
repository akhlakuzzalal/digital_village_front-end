import React from 'react';
import Step from './Step';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Procedure = () => {
  return (
    <div className="mt-10">
      <h3
        className=" p-0 md:p-20 font-bolder text-xl md:text-2xl text-left lg:text-4xl text-blue-900
         dark:text-dark_text"
      >
        3 easy steps to payment
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 p-0 md:px-10">
        <Step1 />
        <Step />
        <Step2 />
        <Step3 />
      </div>
    </div>
  );
};

export default Procedure;
