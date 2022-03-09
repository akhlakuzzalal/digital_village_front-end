import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { ImLab } from 'react-icons/im';
import { MdOutlineMedicalServices } from 'react-icons/md';
const CardAppointment = () => {
  return (
    <div className="w-full md:w-2/3 flex justify-center items-center px-10 mt-0 md:-mt-10 mb-20 ">
      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md bg-white dark:dark-card-bg text-justify">
        <MdOutlineMedicalServices style={{ fontSize: '3em' }} />
        <h5 className=" my-4 font-bold">Qualified Doctors</h5>
        <p>preventive care and checkups, to immunizations and exams</p>
      </div>

      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4 shadow-lg border-2 rounded-md bg-white dark:dark-card-bg text-justify">
        <AiOutlineClockCircle style={{ fontSize: '3em' }} />
        <h5 className=" my-4 font-bold">24 Hours Service</h5>
        <p>preventive care and checkups, to immunizations and exams</p>
      </div>
      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md bg-white dark:dark-card-bg text-justify">
        <BiBookAdd style={{ fontSize: '3em' }} />
        <h5 className=" my-4 font-bold">Emergency </h5>
        <p>preventive care and checkups, to immunizations and exams</p>
      </div>
      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4 shadow-lg border-2 rounded-md bg-white dark:dark-card-bg text-justify">
        <ImLab style={{ fontSize: '3em' }} />
        <h5 className=" my-4 font-bold">Lab Test </h5>
        <p>preventive care and checkups, to immunizations and exams</p>
      </div>
    </div>
  );
};

export default CardAppointment;
