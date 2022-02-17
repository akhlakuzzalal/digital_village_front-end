import React, { useState } from 'react';
import { RiDashboard2Line } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar';
import Header from './Dashboard/partials/Header';
const links = [
  {
    name: 'My Blogs',
    icon: <RiDashboard2Line size={30} />,
    path: '/teacherDashboard/myblogs',
  },
  {
    name: 'My videos',
    icon: <RiDashboard2Line size={30} />,
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
  return (
    <div style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          links={links}
        />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
