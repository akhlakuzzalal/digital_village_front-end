import React from 'react';
import { BsNewspaper } from 'react-icons/bs';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import NewSidebar from '../../../Components/Sidebar/NewSidebar';
import StudentHome from './StudentHome/StudentHome';

const links = [
  {
    name: 'Home',
    icon: <BsNewspaper size={30} />,
    path: '/student/home',
  },
  {
    name: 'All Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/student/allBlogs',
  },
  {
    name: 'All Videos',
    icon: <BsNewspaper size={30} />,
    path: '/student/allVideos',
  },
  {
    name: 'Favourite Blogs',
    icon: <MdOutlineVideoSettings size={30} />,
    path: '/student/favouriteBlogs',
  },
  {
    name: 'Favourite Videos',
    icon: <MdOutlineVideoSettings size={30} />,
    path: '/student/favouriteVideos',
  },
  {
    name: 'Analytics',
    icon: <RiDashboard2Line size={30} />,
    path: '/student/analytics',
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

const Student = () => {
  const location = useLocation();

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Navbar navigation={navigation} />
      <NewSidebar links={links} />
      <div className="mt-[88px] flex-1 ml-14">
        {location?.pathname === '/student' ||
        location?.pathname === '/student/' ? (
          <StudentHome />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Student;
