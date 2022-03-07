import React from 'react';
import { BiDonateHeart,GiNewspaper} from 'react-icons/bi';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { FaConnectdevelop, FaShopify, FaUsers } from 'react-icons/fa';
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
    path: '/admindashboard/donation',
  },
  {
    name: 'Development',
    icon: <FaConnectdevelop size={30} />,
    path: '/admin/development',
    nestedPath: [
      {
        name: 'Add-Development',
        icon: <BsCalendar2EventFill size={30} />,
        path: '/admin/addDevelopment',
      },
      {
        name: 'Manage-Development',
        icon: <BsCalendar2EventFill size={30} />,
        path: '/admin/manageDevelopmet',
      },
     
    ],
  },
  {
    name: 'Market',
    icon: <FaShopify size={30} />,
    path: '/admin/market',
  },

  {
    name: 'newsDashboard',
    icon: <BsCalendar2EventFill size={30} />,
    path: '/admin/newsDashboard',
    nestedPath: [
      {
        name: 'Add-News',
        icon: <BsCalendar2EventFill size={30} />,
        path: '/admin/addNews',
      },
      {
        name: 'Manage-News',
        icon: <BsCalendar2EventFill size={30} />,
        path: '/admin/manageNews',
      },
     
    ],
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
