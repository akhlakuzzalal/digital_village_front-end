import React from 'react';
import Calender from './../Calender/Calender';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:W-1/2 flex justify-center items-center">
        <Calender />
      </div>
      <div className="w-full md:W-1/2 flex justify-center items-center">
        <UserAppointment />
      </div>
    </div>
  );
};

export default UserAppointments;
