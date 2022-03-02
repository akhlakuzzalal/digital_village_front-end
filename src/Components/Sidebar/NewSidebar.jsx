import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';

const NewSidebar = ({ sidebarOpen, setSidebarOpen, links }) => {
  const [showText, setShowText] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="bg-primary min-h-screen relative">
      {/* Links of the dashboard */}
      <ul className="mt-3 space-y-6 p-3">
        {links.map((link) => (
          <li key={link.name}>
            <div
              className={`rounded-sm p-2 ${
                pathname === link.path && 'bg-slate-900 text-white'
              }`}
            >
              <NavLink to={link.path}>
                <div className="flex items-center space-x-2">
                  <div>{link?.icon}</div>
                  {showText && <div className="">{link?.name}</div>}
                </div>
              </NavLink>
            </div>

            {/* nested menu */}
            <div className="ml-4 space-y-3 my-3">
              {link?.nestedPath &&
                link?.nestedPath.map((l) => (
                  <div
                    className={`rounded-sm p-2 ${
                      pathname === link.path && 'bg-slate-900 text-white'
                    }`}
                  >
                    <NavLink to={l.path} key={l.path}>
                      <div className="flex items-center space-x-2">
                        <div>{l?.icon}</div>
                        {showText && <div className="">{l?.name}</div>}
                      </div>
                    </NavLink>
                  </div>
                ))}
            </div>
          </li>
        ))}
      </ul>

      {/* icon for closing and opening */}
      {showText ? (
        <div className="absolute bottom-3 right-3 rounded-full text-white opacity-60 hover:opacity-100">
          <BsArrowLeft
            size={30}
            className="cursor-pointer"
            onClick={() => setShowText(false)}
          />
        </div>
      ) : (
        <div className="absolute bottom-3 right-3 rounded-full text-white opacity-60 hover:opacity-100">
          <BsArrowRight
            size={30}
            className="cursor-pointer"
            onClick={() => setShowText(true)}
          />
        </div>
      )}
    </div>
  );
};

export default NewSidebar;
