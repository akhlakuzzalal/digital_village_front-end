import React from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { FaConnectdevelop, FaShopify, FaUsers } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import NewSidebar from '../../Components/Sidebar/NewSidebar';

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
    path: '/admindashboard/donation',
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
