import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaLeaf} from 'react-icons/fa';
import { BiBookAdd} from 'react-icons/bi';
import { MdOutlineMedicalServices} from 'react-icons/md';
const CardAppointment = () => {
  return (
    <div className="w-full md:w-2/3 flex justify-center items-center px-10 mt-0 md:-mt-10 mb-20 ">
      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md ">
        <MdOutlineMedicalServices style={{ color: 'blue', fontSize: '3em' }} />
        <h5 className="text-blue-600 my-4 font-bold">Qualified Doctors</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4 shadow-lg border-2 rounded-md ">
        <AiOutlineClockCircle style={{ color: 'blue', fontSize: '3em' }} />
        <h5 className="text-blue-600 my-4 font-bold">24 Hours Service</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4  shadow-lg border-2 rounded-md ">
        <BiBookAdd style={{ color: 'blue', fontSize: '3em' }} />
        <h5 className="text-blue-600 my-2 font-bold">Emergency </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="p-2  flex flex-col justify-center items-center mx-0 md:mx-4 shadow-lg border-2 rounded-md ">
        <FaLeaf style={{ color: 'blue', fontSize: '3em' }} />
        <h5 className="text-blue-600 my-2 font-bold">Transplant </h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default CardAppointment;
