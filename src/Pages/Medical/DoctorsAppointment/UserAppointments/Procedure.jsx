import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Procedure = () => {
  return (
    <div className="">
      <h3
        className=" p-10 md:p-20 font-bolder text-lg md:text-xl text-center md:text-left lg:text-4xl text-blue-900
         dark:text-dark_text"
      >
        4 easy steps to payment
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 pl-14  md:px-10">
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </div>
    </div>
  );
};

export default Procedure;
