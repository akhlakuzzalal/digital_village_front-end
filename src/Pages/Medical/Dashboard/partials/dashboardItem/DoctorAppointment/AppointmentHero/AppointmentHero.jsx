import React from 'react';
import doctor from './../../../../../../../assets/medical/doctor.png';

const AppointmentHero = () => {
  return (
    <div className="flex justify-center items-center bg-slate-100 ">
      <div className="w-full md:w-1/2 flex justify-center items-center my-5"></div>

      <div className="w-full md:w-1/2 flex justify-center items-center my-5">
        <img src={doctor} alt="" />
      </div>
    </div>
  );
};

export default AppointmentHero;
