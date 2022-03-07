import React, { useState } from 'react';
import Calender from './../Calender/Calender';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    console.log(date.toString());
    setDate(date);
  };
  return (
    <div className="background">
      <h3 className="text-center text-primary my-8">Your appointments</h3>
      <div className="flex justify-center items-center">
        <div className="w-full md:W-1/2 flex justify-center items-center">
          <Calender onChange={onChange} />
        </div>
        <div className="w-full md:W-1/2 flex justify-center items-center">
          <UserAppointment date={date} />
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
