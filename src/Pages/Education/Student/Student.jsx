import React from 'react';
import { BsCollectionPlay, BsFillInboxesFill } from 'react-icons/bs';
import { FaBloggerB } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { RiDashboard2Line, RiVideoFill } from 'react-icons/ri';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import NewSidebar from '../../../Components/Sidebar/NewSidebar';
import StudentHome from './StudentHome/StudentHome';

const links = [
  {
    name: 'Home',
    icon: <IoIosHome size={30} />,
    path: '/student/home',
  },
  {
    name: 'All Blogs',
    icon: <FaBloggerB size={30} />,
    path: '/student/allBlogs',
  },
  {
    name: 'All Videos',
    icon: <RiVideoFill size={30} />,
    path: '/student/allVideos',
  },
  {
    name: 'Favourite Blogs',
    icon: <BsFillInboxesFill size={30} />,
    path: '/student/favouriteBlogs',
  },
  {
    name: 'Favourite Videos',
    icon: <BsCollectionPlay size={30} />,
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
    <div>
      <Navbar navigation={navigation} />
      <div className="">
        <NewSidebar links={links} />
        <div className="mt-[80px] w-[calc(100vw-50px)] px-3 ml-auto">
          {location?.pathname === '/student' ||
          location?.pathname === '/student/' ? (
            <StudentHome />
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
