import React, { useState } from 'react';
import {
  MdOutlineAppRegistration,
  MdOutlineProductionQuantityLimits,
  MdReviews,
} from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { SiHomebridge } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
import Profile from './Profile/Profile';
const links = [
  {
    name: 'Profile',
    icon: <SiHomebridge size={30} />,
    path: '/userdashboard/profile',
  },
  {
    name: 'Events',
    icon: <MdOutlineProductionQuantityLimits size={30} />,
    path: '/userdashboard/myBookedEvents',
  },
  {
    name: 'Donation',
    icon: <RiDashboard2Line size={30} />,
    path: '/userdashboard/myDonations',
  },
  {
    name: 'My Help Requests',
    icon: <MdOutlineAppRegistration size={30} />,
    path: '/userdashboard/myHelpRequests',
  },
  {
    name: 'Review',
    icon: <MdReviews size={30} />,
    path: '/userdashboard/review',
  },
];

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const initial =
    location.pathname === '/userdashboard' ||
    location.pathname === '/userdashboard/';

  return (
    <div className="flex">
      {/* Sidebar */}
      <NewSidebar setIsOpen={setIsOpen} links={links} />

      {/* contents */}
      <div className={`mt-[80px] flex-1`}>
        {initial ? <Profile /> : <Outlet />}
      </div>
    </div>
  );
};

export default UserDashboard;
