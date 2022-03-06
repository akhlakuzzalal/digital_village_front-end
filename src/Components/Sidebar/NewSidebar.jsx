import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Links from './Links/Links';
const NewSidebar = ({ links }) => {
  const [showText, setShowText] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className={`bg-slate-900 text-white mt-[88px] fixed z-50 overflow-y-scroll ${
        showText && 'min-w-[200px]'
      }`}
      style={{ height: 'calc(100vh - 88px)' }}
    >
      {/* Links of the dashboard */}
      <ul className="mt-3 space-y-1">
        {links.map((link) => (
          <li key={link.name}>
            <Links
              link={link}
              showText={showText}
              showTooltip={showTooltip}
              setShowTooltip={setShowTooltip}
            />
          </li>
        ))}
      </ul>

      {/* icon for closing and opening */}
      {showText ? (
        <div className="absolute bottom-16 right-3 rounded-full text-white opacity-60 hover:opacity-100">
          <BsArrowLeft
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setShowText(false);
            }}
          />
        </div>
      ) : (
        <div className="absolute bottom-16 right-3 rounded-full text-white opacity-60 hover:opacity-100">
          <BsArrowRight
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setShowText(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default NewSidebar;
