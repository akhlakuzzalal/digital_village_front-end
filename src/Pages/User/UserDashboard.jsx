import React, { useState } from 'react';
import { MdOutlineAppRegistration, MdOutlineProductionQuantityLimits, MdReviews } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { SiHomebridge } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
import Profile from './DashboardComponent/Profile/Profile';
const links = [
  {
    name: 'Profile',
    icon: <SiHomebridge size={30} />,
    path: '/userdashboard/profile',
  },
  {
    name: 'Events',
    icon: <MdOutlineProductionQuantityLimits size={30} />,
    path: '/userdashboard/my-event-booking',
  },
  {
    name: 'Donation',
    icon: <RiDashboard2Line size={30} />,
    path: '/userdashboard/donarpaymente',
  },
  {
    name: 'My Apply',
    icon: <MdOutlineAppRegistration size={30} />,
    path: '/userdashboard/requestapply',
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
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      {/* Sidebar */}
      <NewSidebar setIsOpen={setIsOpen} links={links} />

      {/* contents */}
      <div
        className={`mt-[80px] flex-1 ${isOpen ? 'ml-[273px]' : 'ml-[82px]'}`}
      >
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {initial ? <Profile /> : <Outlet />}
      </div>
    </div>
  );
};

export default UserDashboard;
