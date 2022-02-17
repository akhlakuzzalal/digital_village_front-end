import React, { useState } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import Analytics from './Analytics/Analytics';
import Header from './Dashboard/partials/Header';
const links = [
  {
    name: 'My Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/teacherDashboard/myblogs',
  },
  {
    name: 'My videos',
    icon: <MdOutlineVideoSettings size={30} />,
    path: '/teacherDashboard/myvideos',
  },
  {
    name: 'analytics',
    icon: <RiDashboard2Line size={30} />,
    path: '/teacherDashboard/analytics',
  },
];

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  const location = useLocation();
  const initial =
    location.pathname === '/teacherDashboard' ||
    location.pathname === '/teacherDashboard/';

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

export default TeacherDashboard;
