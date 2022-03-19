import React, { useState } from 'react';
import { AiFillDelete, AiFillFileAdd } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { FaHandsHelping, FaShopify, FaUsers } from 'react-icons/fa';
import { FcDonate, FcImport } from 'react-icons/fc';
import { IoLogoDesignernews } from 'react-icons/io';
import {
  MdManageAccounts,
  MdOutlineManageAccounts,
  MdOutlineMedicalServices,
} from 'react-icons/md';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import NewSidebar from '../../Components/Sidebar/NewSidebar';

const links = [
  {
    name: 'All Users',
    icon: <FaUsers size={30} />,
    path: '/admin/allusers',
  },
  {
    name: 'Add Event',
    icon: <AiFillFileAdd size={30} />,
    path: '/admin/add-events',
  },
  {
    name: 'Delete Event',
    icon: <AiFillDelete size={30} />,
    path: '/admin/manageEvents',
  },
  {
    name: 'Donars',
    icon: <BiDonateHeart size={30} />,
    path: '/admin/manageAllDonars',
  },
  {
    name: 'Add a Cause',
    icon: <FcImport size={30} />,
    path: '/admin/addcause',
  },
  {
    name: 'Donation Cuases',
    icon: <FcDonate size={30} />,
    path: '/admin/allcauses',
  },
  {
    name: 'Help Requests',
    icon: <FaHandsHelping size={30} />,
    path: '/admin/requestapply',
  },
  {
    name: 'Add development',
    icon: <RiLightbulbFlashFill size={30} />,
    path: '/admin/addDevelopment',
  },
  {
    name: 'Manage Development',
    icon: <MdManageAccounts size={30} />,
    path: '/admin/manageDevelopmet',
  },
  {
    name: 'Market',
    icon: <FaShopify size={30} />,
    path: '/admin/market',
  },
  {
    name: 'Add appointment',
    icon: <MdOutlineMedicalServices size={30} />,
    path: '/admin/addAppointment',
  },
  {
    name: 'Add-News',
    icon: <IoLogoDesignernews size={30} />,
    path: '/admin/addNews',
  },
  {
    name: 'Manage-News',
    icon: <MdOutlineManageAccounts size={30} />,
    path: '/admin/manageNews',
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Navbar navigation={navigation} />
      <div className="flex">
        <NewSidebar links={links} setIsOpen={setIsOpen} />
        <div
          className={`mt-[80px] flex-1 ${isOpen ? 'ml-[273px]' : 'ml-[82px]'}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
