import React from 'react';
import Calender from './../Calender/Calender';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  return (
    <>
      <h3 className="text-center my-8">Your appointments</h3>
      <div className="flex justify-center items-center">
        <div className="w-full md:W-1/2 flex justify-center items-center">
          <Calender style={{width:"100%"}}/>
        </div>
        <div className="w-full md:W-1/2 flex justify-center items-center">
          <UserAppointment />
        </div>
      </div>
    </>
  );
};

export default UserAppointments;
