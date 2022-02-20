import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import study from '../../assets/education/study.png';

const Education = () => {
  return (
    <div className="  py-5 mt-[88px]">
      <h1 className="text-secondary text-center ">Digital Learning</h1>
      <div className=" flex  flex-wrap justify-center items-center  ">
        <div className="flex flex-wrap justify-center items-center  w-full md:w-1/2 ">
          <Link to="#">
            <div className=" border-2 bg-purple-200 hover:bg-slate-50  rounded-lg text-center py-9  md:py-16  border-slate-200 mx-2  flex justify-center items-center  my-2 ">
              <div className="bg-white border-2 border-slate-200  rounded-full w-full md:w-1/2  my-2 flex justify-center items-center ">
                <h1>
                  <GiTeacher />
                </h1>
              </div>

              <h3 className="Neutral-500 md:heading_sm px-0 md:px-8">
                Join As A Teacher
              </h3>
            </div>
          </Link>
          <Link to="#">
            <div className=" border-2 border-slate-200 bg-pink-200   hover:bg-slate-50 rounded-lg text-center py-9  md:py-16   mx-2  flex justify-center items-center  my-2">
              <div className="bg-white border-2 border-slate-200 rounded-full flex justify-center items-center w-full md:w-1/2  my-2  ">
                <h1>
                  <FaChalkboardTeacher />
                </h1>
              </div>

              <button className="">
                <h3 className="Neutral-500 md:heading_sm px-0 md:px-8">
                  Join As A Student
                </h3>
              </button>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={study} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
