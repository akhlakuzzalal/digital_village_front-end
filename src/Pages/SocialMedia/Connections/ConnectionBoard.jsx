import React, { useState } from 'react';
import { FcAcceptDatabase } from 'react-icons/fc';
import { MdPending, MdPersonAddAlt1 } from 'react-icons/md';
import { SiHomebridge } from 'react-icons/si';
import { Outlet, useLocation } from 'react-router-dom';
import NewSidebar from '../../../Components/Sidebar/NewSidebar';
const links = [
  {
    name: 'Home',
    icon: <SiHomebridge size={30} />,
    path: '/connection/home',
  },
  {
    name: 'Add People',
    icon: <MdPersonAddAlt1 size={30} />,
    path: '/',
  },
  {
    name: 'Requesting',
    icon: <MdPending size={30} />,
    path: '/',
  },
  {
    name: 'Wait for connection',
    icon: <FcAcceptDatabase size={30} />,
    path: '/',
  },
];

const ConnectionBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const initial =
    location.pathname === '/social' || location.pathname === '/social/';

  return (
    <div className="flex">
      <NewSidebar links={links} setIsOpen={setIsOpen} />
      <div
        className={`mt-[90px] flex-1 ${isOpen ? 'ml-[273px]' : 'ml-[82px]'}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ConnectionBoard;
