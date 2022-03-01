import React, { useState } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../../Components/Sidebar';
import Analytics from './Analytics/Analytics';
import Header from './Dashboard/partials/Header';

const links = [
  {
    name: 'My Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/myblogs',
    nestedPath: [
      {
        name: 'nested 1',
        icon: <RiDashboard2Line size={30} />,
        path: '/teacher/myvideos',
      },
      {
        name: 'nested 2',
        icon: <RiDashboard2Line size={30} />,
        path: '/#',
      },
    ],
  },
  {
    name: 'Add Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/addBlogs',
  },
  {
    name: 'My videos',
    icon: <MdOutlineVideoSettings size={30} />,
    path: '/teacher/myvideos',
  },
  {
    name: 'analytics',
    icon: <RiDashboard2Line size={30} />,
    path: '/teacher/analytics',
  },
];

const Teacher = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  const location = useLocation();
  const initial =
    location.pathname === '/teacher' || location.pathname === '/teacher/';

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
        {initial ? <Analytics /> : <Outlet />}
      </div>
    </div>
  );
};

export default Teacher;
