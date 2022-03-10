import React, { useState } from 'react';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaClinicMedical } from 'react-icons/fa';
import { GiLoveInjection } from 'react-icons/gi';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from './../../Components/Sidebar/NewSidebar';



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
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {initial ? (
          <div className="w-fit mx-auto">
          <img src="https://www.freepik.com/free-vector/privacy-policy-concept-illustration_19245710.htm#query=policy&position=0&from_view=search" alt="" />
        </div>

        ) : <Outlet />}
      </div>
    </div>
  );
};

export default MedicalDashboard;
