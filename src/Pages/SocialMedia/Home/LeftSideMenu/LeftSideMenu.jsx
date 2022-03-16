import React from 'react';
import {
  FcCalendar,
  FcDonate,
  FcGraduationCap,
  FcHome,
  FcShop,
} from 'react-icons/fc';
import { GrGroup } from 'react-icons/gr';
import { MdLocalHospital } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LeftSideMenu = () => {
  return (
    <div className="mt-10 space-y-6 ml-6 fixed">
      {/* User Profile */}
      <div className="flex items-center space-x-3 cursor-pointer">
        {/* avatar */}
        <div class="mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <img
            src="http://source.unsplash.com/100x100/?woman"
            className="rounded-full"
            alt=""
          />
          <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
        </div>
        <h6>User Name</h6>
      </div>
      {/* App menus */}
      <div>
        <Link to="/connection">
          <div className="flex items-center space-x-3 cursor-pointer">
            <GrGroup size={30} />
            <h6>Connectios</h6>
          </div>
        </Link>
      </div>
      <div>
        <Link to={'/education'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <FcGraduationCap size={30} />
            <h6>E Learning</h6>
          </div>
        </Link>
      </div>
      <div>
        <Link to={'/donation'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <FcDonate size={30} />
            <h6>Donation</h6>
          </div>
        </Link>
      </div>
      <div>
        <Link to={'/e-market'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <FcShop size={30} />
            <h6>E Market</h6>
          </div>
        </Link>
      </div>
      <div>
        <Link to={'/medical'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <MdLocalHospital size={30} />
            <h6>Medical</h6>
          </div>
        </Link>
      </div>
      <div>
        <Link to={'/development'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <FcHome size={30} />
            <h6>Development</h6>
          </div>
        </Link>
      </div>
      <div>
        <Link to={'/events'}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <FcCalendar size={30} />
            <h6>Events</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftSideMenu;
