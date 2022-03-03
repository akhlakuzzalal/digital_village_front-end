import React from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import NewSidebar from '../../../Components/Sidebar/NewSidebar';

const links = [
  {
    name: 'My Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/myblogs',
  },
  {
    name: 'Publish Blog',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/publishBlog',
  },
  {
    name: 'Publish video',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/publishVideo',
  },
  {
    name: 'My videos',
    icon: <MdOutlineVideoSettings size={30} />,
    path: '/teacher/myvideos',
  },
  {
    name: 'analytics',
    icon: <RiDashboard2Line size={30} />,
    path: '/teacher/analytics',
  },
];

// Navbar dynamic
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Admin', href: '/admin' },
];

const Teacher = () => {
  const location = useLocation();
  const initial =
    location.pathname === '/teacher' || location.pathname === '/teacher/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Navbar navigation={navigation} />
      <NewSidebar links={links} />
      <div className="mt-[88px] flex-1 ml-14">
        <Outlet />
      </div>
    </div>
  );
};

export default Teacher;
