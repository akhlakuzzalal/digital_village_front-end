import React, { useState } from 'react';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaClinicMedical } from 'react-icons/fa';
import { GiLoveInjection, GiMedicines } from 'react-icons/gi';
import { RiUserHeartFill } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from './../../Components/Sidebar/NewSidebar';
import VaccineRegistration from './VaccineRegistration/VaccineRegistration';

const links = [
  {
    name: 'Home',
    icon: <FaClinicMedical size={30} />,
    path: '/medical',
  },
  {
    name: 'Medicine Store',
    icon: <GiMedicines size={30} />,
    path: '/medicinestore',
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
    name: 'Your Appointment',
    icon: <RiUserHeartFill size={30} />,
    path: '/medicalDashboard/userAppointments',
  },
];

const MedicalDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const initial =
    location.pathname === '/medicalDashboard' ||
    location.pathname === '/medicalDashboard/';

  return (
    <div className="flex">
      {/* Sidebar */}
      <NewSidebar setIsOpen={setIsOpen} links={links} />

      {/* contents */}
      <div
        className={`mt-[85px] flex-1 ${isOpen ? 'ml-[273px]' : 'ml-[82px]'}`}
      >
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {initial ? <VaccineRegistration /> : <Outlet />}
      </div>
    </div>
  );
};

export default MedicalDashboard;
