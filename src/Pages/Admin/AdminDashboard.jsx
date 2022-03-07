import React from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { FaConnectdevelop, FaFistRaised, FaShopify, FaUsers } from 'react-icons/fa';
import { FcDonate, FcImport } from 'react-icons/fc';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
// import Sidebar from '../../Components/Sidebar';
// import WelcomeBanner from '../../Components/WelcomeBanner';
// import Header from '../Education/Teacher/Dashboard/partials/Header';

const links = [
  {
    name: 'All Users',
    icon: <FaUsers size={30} />,
    path: '/admin/allusers',
  },
  {
    name: 'Events',
    icon: <BsCalendar2EventFill size={30} />,
    path: '/admin/events',
    nestedPath: [
      {
        name: 'Add Event',
        icon: <BsCalendar2EventFill size={30} />,
        path: '/admin/add-events',
      },
      {
        name: 'Delete Event',
        icon: <BsCalendar2EventFill size={30} />,
        path: '/admin/manageEvents',
      },
    ],
  },

  {
    name: 'Add Review',
    icon: <BsCalendar2EventFill size={30} />,
    path: '/admin/add-review',
  },
  {
    name: 'Donation',
    icon: <BiDonateHeart size={30} />,
    path: '/admin/paymentcauses',
    nestedPath: [

      {
        name: 'All Payment',
        icon: <FaFistRaised size={30} />,
        path: '/admin/paymentcauses',
      },
      {
        name: 'Add a Cause',
        icon: <FcImport size={30} />,
        path: '/admin/addcause',
      },
      {
        name: 'All Cuases',
        icon: <FcDonate size={30} />,
        path: '/admin/allcauses',
      },
    ],
  },
  {
    name: 'Development',
    icon: <FaConnectdevelop size={30} />,
    path: '/admin/development',
  },
  {
    name: 'Market',
    icon: <FaShopify size={30} />,
    path: '/admin/market',
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Admin', href: '/admin' },
];

const AdminDashboard = () => {
  const location = useLocation();
  const initial =
    location.pathname === '/admindashboard' ||
    location.pathname === '/admindashboard/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Navbar navigation={navigation} />
      <NewSidebar links={links} />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
