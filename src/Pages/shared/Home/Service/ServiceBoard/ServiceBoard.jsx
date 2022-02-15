import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import useMediaQuery from '../../../../../hooks/useMediaQuery';

const ServiceBoard = ({
  setControl,
  control,
  service: { name, desc, icon, controlData },
}) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? (
    <div
      onClick={() => setControl(controlData)}
      className={`${
        control === controlData && 'outline outline-primary'
      } flex justify-center items-center rounded-md cursor-pointer p-4 shadow-2xl mx-3 min-w-[250px] space-x-3`}
    >
      <div className="shrink-0">{icon}</div>
      <div className="space-y-2">
        {/* name */}
        <div className="text-xl font-medium">{name}</div>
        {/* desc */}
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>
    </div>
  ) : (
    <NavHashLink smooth to={`/#${controlData}`}>
      <div
        onClick={() => setControl(controlData)}
        className={`${
          control === controlData && 'outline outline-primary'
        } flex justify-center items-center rounded-md cursor-pointer p-4 shadow-2xl mx-3 min-w-[250px] space-x-3`}
      >
        <div className="shrink-0">{icon}</div>
        <div className="space-y-2">
          {/* name */}
          <div className="text-xl font-medium text-black">{name}</div>
          {/* desc */}
          <p className="text-slate-500 text-sm">{desc}</p>
        </div>
      </div>
    </NavHashLink>
  );
};

export default ServiceBoard;
