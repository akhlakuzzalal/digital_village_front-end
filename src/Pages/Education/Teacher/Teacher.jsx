import React from 'react';
import { BsNewspaper, BsPencilSquare } from 'react-icons/bs';
import { MdOndemandVideo, MdVideoSettings } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import NewSidebar from '../../../Components/Sidebar/NewSidebar';
import Analytics from './Dashboard/Analytics/Analytics';

const links = [
  {
    name: 'Publish Blog',
    icon: <BsPencilSquare size={30} />,
    path: '/teacher/publishBlog',
  },
  {
    name: 'Publish video',
    icon: <MdVideoSettings size={30} />,
    path: '/teacher/publishVideo',
  },
  {
    name: 'My Blogs',
    icon: <BsNewspaper size={30} />,
    path: '/teacher/myblogs',
  },

  {
    name: 'My videos',
    icon: <MdOndemandVideo size={30} />,
    path: '/teacher/myvideos',
  },
  {
    name: 'analytics',
    icon: <SiGoogleanalytics size={30} />,
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
  const isHomePage =
    location.pathname === '/teacher' || location.pathname === '/teacher/';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Navbar navigation={navigation} />
      <NewSidebar links={links} />
      <div className="mt-[80px] flex-1 ml-18 md:ml-20 lg:ml-24">
        {isHomePage ? <Analytics /> : <Outlet />}
      </div>
    </div>
  );
};

export default Teacher;
