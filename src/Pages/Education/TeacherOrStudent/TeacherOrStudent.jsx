import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import study from '../../../assets/education/study.png';
import DecidingCard from './DecidingCard/DecidingCard';

const TeacherOrStudent = () => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-6xl lg:text-6xl py-5 ">
        Choose Your Path
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex flex-col justify-center items-center w-1/2 flex-wrap space-y-9">
          <Link to="/teacherinfo">
            <DecidingCard icon={<GiTeacher />} name="Teacher" />
          </Link>
          <Link to="/student">
            <DecidingCard icon={<FaChalkboardTeacher />} name="Student" />
          </Link>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img src={study} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TeacherOrStudent;
