import React, { useState } from 'react';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaClinicMedical } from 'react-icons/fa';
import { GiLoveInjection, GiMedicines } from 'react-icons/gi';
import { RiUserHeartFill } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
import MedicalHome from './MedicalHome';

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
    path: '/medical/vaccine',
  },
  {
    name: 'Doctor Appointment',
    icon: <AiOutlineMedicineBox size={30} />,
    path: '/medical/appointment',
  },
  {
    name: 'Your Appointment',
    icon: <RiUserHeartFill size={30} />,
    path: '/medical/userAppointments',
  },
];

const Medical = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const initial =
    location.pathname === '/medical' || location.pathname === '/medical/';

  return (
    <div className="flex">
      {/* Sidebar */}
      <NewSidebar setIsOpen={setIsOpen} links={links} />

      {/* contents */}
      <div className={`mt-[80px] flex-1  `}>
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
        {initial ? <MedicalHome /> : <Outlet />}
      </div>
    </div>
  );
};

export default Medical;
