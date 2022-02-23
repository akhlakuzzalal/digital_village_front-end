import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import study from '../../assets/education/study.png';

const Education = () => {
  return (
    <div
      className="bg-gradient-to-r mt-[88px]"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <h1 className="text-center text-3xl md:text-6xl lg:text-6xl py-5 hover:text-blue-600">
        Digital Learning
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex justify-center items-center w-full flex-wrap">
          <Link to="/teacherinfo">
            <div className=" border-2 bg-secondary hover:bg-slate-50  rounded-lg text-center py-9  md:py-16  border-primary mx-2  flex justify-center items-center  my-2 ">
              <div className="bg-white border-2  border-primary rounded-full w-full md:w-1/2  my-2 flex justify-center items-center">
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
        <div className="flex justify-center items-center w-full">
          <img src={study} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
