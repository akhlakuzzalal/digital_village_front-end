import React from 'react';
import { AiFillDelete, AiFillFileAdd } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { FaHandsHelping, FaShopify, FaUsers } from 'react-icons/fa';
import { FcDonate, FcImport } from 'react-icons/fc';
import { ImStatsDots } from 'react-icons/im';
import { IoLogoDesignernews } from 'react-icons/io';
import {
  MdManageAccounts,
  MdOutlineEditNotifications,
  MdOutlineManageAccounts,
  MdOutlineMedicalServices,
} from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import NewSidebar from '../../Components/Sidebar/NewSidebar';

const links = [
  {
    name: 'Home',
    icon: <ImStatsDots size={30} />,
    path: '/admin/home',
  },
  {
    name: 'All Users',
    icon: <FaUsers size={30} />,
    path: '/admin/allusers',
  },
  {
    name: 'Notification',
    icon: <MdOutlineEditNotifications size={30} />,
    path: '/admin/sendNotification',
  },
  {
    name: 'Add Event',
    icon: <AiFillFileAdd size={30} />,
    path: '/admin/add-events',
  },
  {
    name: 'Manage Event',
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
    path: '/admin/allHelpRequests',
  },
  {
    name: 'Manage Development',
    icon: <MdManageAccounts size={30} />,
    path: '/admin/manageDevelopmentProposals',
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
  return (
    <div>
      <Navbar navigation={navigation} />
      <div className="flex">
        <NewSidebar links={links} />
        <div className={`mt-[80px] ml-[70px] flex-1`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
