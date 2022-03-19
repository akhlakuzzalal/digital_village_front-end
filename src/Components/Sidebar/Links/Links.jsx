import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Links = ({ link, showText, showTooltip, setShowTooltip }) => {
  const [showNestedMenu, setShowNestedMenu] = useState(true);

  return (
    <div>
      <div className="hover:bg-slate-600 transition-all duration-300 w-fit p-3 rounded-lg">
        <NavLink to={link?.path}>
          {/* icon and tooltip */}
          {!showText && (
            <div className="relative group">
              {/* tooltip */}
              <span
                className={`hidden ${
                  showTooltip && 'group-hover:block'
                } w-[120px] bg-black text-white z-[100] text-center py-1 rounded-lg absolute  left-[130%] top-0 after:content-[' '] after:absolute after:right-[100%] after:mt-2  after:border-[5px] after:border-t-transparent after:border-r-black after:border-b-transparent after:border-l-transparent`}
              >
                {link?.name}
              </span>

              {/* icon */}
              <div
                className="flex items-center space-x-2"
                onClick={() => setShowTooltip(false)}
                onMouseOver={() => setShowTooltip(true)}
              >
                {link?.icon}
              </div>
            </div>
          )}

          {/* when the text will be shown */}
          {showText && (
            <div className="flex items-center space-x-2">
              <div>{link?.icon}</div>

              {/* arrow icon for nested path */}
              {link?.nestedPath ? (
                <div className="flex items-center space-x-1">
                  <div>{link?.name}</div>
                  {!showNestedMenu ? (
                    <IoIosArrowDown
                      size={20}
                      onClick={() => setShowNestedMenu(!showNestedMenu)}
                    />
                  ) : (
                    <IoIosArrowUp
                      size={20}
                      onClick={() => setShowNestedMenu(!showNestedMenu)}
                    />
                  )}
                </div>
              ) : (
                <div>{link?.name}</div>
              )}
            </div>
          )}
        </NavLink>
      </div>

      {/* nested menu */}
      {showNestedMenu && (
        <div className="ml-6 mr-1 space-y-2">
          {link?.nestedPath &&
            link?.nestedPath.map((l) => (
              <div
                key={l.path}
                className="hover:bg-slate-600 transition-all duration-300 px-3 py-1 rounded-lg"
              >
                <NavLink to={l.path} key={l.path}>
                  <div className="relative group">
                    {!showText && (
                      <span
                        className={`hidden ${
                          showTooltip && 'group-hover:block'
                        } w-[120px] bg-black text-white text-center py-1 rounded-lg absolute z-50 left-[130%] top-0 after:content-[' '] after:absolute after:right-[100%] after:mt-2  after:border-[5px] after:border-t-transparent after:border-r-black after:border-b-transparent after:border-l-transparent`}
                      >
                        {l?.name}
                      </span>
                    )}

                    {/* icon */}
                    <div
                      className="flex items-center space-x-2"
                      onClick={() => setShowTooltip(false)}
                      onMouseOver={() => setShowTooltip(true)}
                    >
                      {l?.icon}
                      {showText && (
                        <div className="" tooltip={l?.name}>
                          {l?.name}
                        </div>
                      )}
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Links;
