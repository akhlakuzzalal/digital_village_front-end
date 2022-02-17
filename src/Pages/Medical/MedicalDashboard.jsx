import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import WelcomeBanner from './../Medical/Dashboard/partials/dashboardItem/WelcomeBanner';
import Sidebar from './../Medical/Dashboard/partials/Sidebar';
import Header from './../shared/Home/Header/Header';

const MedicalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="flex h-screen overflow-hidden ">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />
            </div>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MedicalDashboard;
