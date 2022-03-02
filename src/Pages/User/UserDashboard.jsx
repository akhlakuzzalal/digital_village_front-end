import React, { useState } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { SiHomebridge } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import Header from '../Education/Teacher/Dashboard/partials/Header';
import Profile from './DashboardComponent/Profile';
const links = [
  {
    name: 'Profile',
    icon: <SiHomebridge size={30} />,
    path: '/userdashboard/profile',
  },
  {
    name: 'Events',
    icon: <MdOutlineProductionQuantityLimits size={30} />,
    path: '/',
  },
  {
    name: 'Donation',
    icon: <RiDashboard2Line size={30} />,
    path: '/',
  },
];

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  const location = useLocation();
  const initial =
    location.pathname === '/userdashboard' ||
    location.pathname === '/userdashboard/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        showText={showText}
        setShowText={setShowText}
        links={links}
      />

      {/* contents */}
      <div className="flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {initial ? <Profile /> : <Outlet />}
      </div>
    </div>
  );
};

export default UserDashboard;
