import React, { useState } from 'react';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaClinicMedical } from 'react-icons/fa';
import { GiLoveInjection } from 'react-icons/gi';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../../src/components/Sidebar';
import WelcomeBanner from './../Medical/Dashboard/partials/dashboardItem/WelcomeBanner';
import Header from './../shared/Home/Header/Header';

const links = [
  {
    name: 'Medicine Store',
    icon: <FaClinicMedical size={30} />,
    path: '/medical',
  },
  {
    name: 'Vaccine Registration',
    icon: <GiLoveInjection size={30} />,
    path: '/medical/vaccine',
  },
  {
    name: 'Doctor Appointment',
    icon: <AiOutlineMedicineBox size={30} />,
    path: '/medical/appointment',
  },
];

const MedicalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  const location = useLocation();
  const initial =
    location.pathname === '/medical' || location.pathname === '/medical/';

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
        {initial ? <WelcomeBanner /> : <Outlet />}
      </div>
    </div>
  );
};

export default MedicalDashboard;
