import React, { useState } from 'react';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaClinicMedical } from 'react-icons/fa';
import { GiLoveInjection } from 'react-icons/gi';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Education/Teacher/Dashboard/partials/Header';
import NewSidebar from './../../Components/Sidebar/NewSidebar';
import WelcomeBanner from './Dashboard/partials/dashboardItem/WelcomeBanner';

const links = [
  {
    name: 'Medicine Store',
    icon: <FaClinicMedical size={30} />,
    path: '/medicalDashboard',
  },
  {
    name: 'Vaccine Registration',
    icon: <GiLoveInjection size={30} />,
    path: '/medicalDashboard/vaccine',
  },
  {
    name: 'Doctor Appointment',
    icon: <AiOutlineMedicineBox size={30} />,
    path: '/medicalDashboard/appointment',
  },
  {
    name: 'User Appointment',
    icon: <AiOutlineMedicineBox size={30} />,
    path: '/medicalDashboard/userAppointments',
  },
];

const MedicalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  const location = useLocation();
  const initial =
    location.pathname === '/medicalDashboard' ||
    location.pathname === '/medicalDashboard/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      {/* Sidebar */}
      <NewSidebar
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
