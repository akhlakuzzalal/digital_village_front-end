import React, { useState } from 'react';
import { BiDonateHeart } from 'react-icons/bi';
import { BsCalendar2EventFill } from 'react-icons/bs';
import { FaConnectdevelop, FaShopify, FaUsers } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../Components/Sidebar/NewSidebar';
// import Sidebar from '../../Components/Sidebar';
// import WelcomeBanner from '../../Components/WelcomeBanner';
// import Header from '../Education/Teacher/Dashboard/partials/Header';

const links = [
  {
    name: 'All Users',
    icon: <FaUsers size={30} />,
    path: '/admin',
    nestedPath: [
      {
        name: 'All Users',
        icon: <FaUsers size={30} />,
        path: '/admin',
      },
      {
        name: 'All Users',
        icon: <FaUsers size={30} />,
        path: '/admin',
      },
      {
        name: 'All Users',
        icon: <FaUsers size={30} />,
        path: '/admin',
      },
    ],
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

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(true);

  const location = useLocation();
  const initial =
    location.pathname === '/admindashboard' ||
    location.pathname === '/admindashboard/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      {/* Sidebar */}
      {/* <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        showText={showText}
        setShowText={setShowText}
        links={links}
      /> */}

      {/* contents */}
      {/* <div className="flex-1">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {initial ? <WelcomeBanner /> : <Outlet />}
      </div> */}

      <NewSidebar links={links} />
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
