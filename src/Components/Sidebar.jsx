import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
  links,
  showText,
  setShowText,
}) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <div
      id="sidebar"
      ref={sidebar}
      className={`absolute top-0 left-0 lg:sticky min-h-screen flex flex-col z-40 lg:translate-x-0 transform h-screen w-64 lg:w-fit-content lg:sidebar-expanded:!w-fit-content 2xl:!w-fit-content shrink-0  bg-slate-800 text-white p-4 transition-all duration-200 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-64'
      }`}
    >
      {/* Sidebar header */}
      <div className="flex justify-between mb-10">
        {/* Close button */}
        <button
          ref={trigger}
          className="lg:hidden text-slate-500 hover:text-slate-400"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        {/* Logo */}
        <div>
          <NavLink to="/" className="block">
            <img
              className="w-16 cursor-pointer mx-auto"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </div>
      </div>

      <div className="space-y-8">
        {/* Pages group */}
        <div>
          <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span
              className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true"
            >
              •••
            </span>
            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
              Pages
            </span>
          </h3>

          {/* Links */}
          <ul className="mt-3 space-y-6 p-3">
            {/* Dashboard */}
            {links.map((link) => (
              <li
                key={link.name}
                className={`rounded-sm p-2 ${
                  pathname === link.path && 'bg-slate-900'
                }`}
              >
                <NavLink
                  to={link.path}
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname === link.path && 'hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {link.icon}
                    {showText && (
                      <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        {link.name}
                      </span>
                    )}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
