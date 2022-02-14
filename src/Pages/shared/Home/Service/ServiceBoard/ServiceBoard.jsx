import React from 'react';

const ServiceBoard = ({
  setControl,
  control,
  service: { name, desc, icon, controlData },
}) => {
  return (
    <div className="flex flex-row w-full">
      <li
        className={`${
          control === controlData && 'bg-green-600 text-white'
        } flex items-center rounded-md cursor-pointer`}
      >
        <div
          onClick={() => setControl(controlData)}
          className="p-6 rounded-xl shadow-2xl flex items-center"
        >
          <div className="shrink-0">{icon}</div>
          <div>
            {/* name */}
            <div className="text-xl font-medium text-black">{name}</div>
            {/* desc */}
            <p className="text-slate-500 text-sm">{desc}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default ServiceBoard;
