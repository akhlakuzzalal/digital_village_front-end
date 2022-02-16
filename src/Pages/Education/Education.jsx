import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import bg from '../../Images/bg.png';

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-200  to-yellow-200 py-5 ">
      <h1 className="text-center ">Digital Learning</h1>
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center min-h-screen w-1/2 ">
          <Link to="#">
            <div className=" border-2 bg-lime-400 hover:bg-slate-50  rounded-lg text-center py-9  md:py-16  border-lime-500 mx-2  flex justify-center items-center  ">
              <div className="bg-white border-2  border-lime-500 rounded-full w-1/2 flex justify-center items-center ">
                <h1>
                  <GiTeacher />
                </h1>
              </div>

              <Link to="#">
                <button className="">
                  <h3 className="Neutral-500 md:heading_sm px-0 md:px-8">
                    Join As A Teacher
                  </h3>
                </button>
              </Link>
            </div>
          </Link>
          <Link to="#">
            <div className=" border-2 border-amber-500  bg-yellow-300 hover:bg-slate-50 rounded-lg text-center py-9  md:py-16   mx-2  flex justify-center items-center  ">
              <div className="bg-white border-2 border-amber-500 rounded-full w-1/2 flex justify-center items-center   ">
                <h1>
                  <FaChalkboardTeacher />
                </h1>
              </div>

              <Link to="#">
                <button className="">
                  <h3 className="Neutral-500 md:heading_sm px-0 md:px-8">
                    Join As A Teacher
                  </h3>
                </button>
              </Link>
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
