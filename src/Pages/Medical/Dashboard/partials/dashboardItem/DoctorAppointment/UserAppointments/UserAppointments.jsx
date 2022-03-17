import React, { useState } from 'react';
import Calender from './../Calender/Calender';
import Procedure from './Procedure';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    console.log(date.toString());
    setDate(date);
  };
  return (
    <div className="background">
      <Procedure />
      <h3 className="text-center  text-xl md:text-3xl text-blue-900 my-10">
        Your appointments
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center my-10">
        <div className=" mx-0 md:mx-auto">
          <Calender onChange={onChange} />
        </div>
        <div className=" mx-0 md:mx-auto">
          <UserAppointment date={date} />
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
