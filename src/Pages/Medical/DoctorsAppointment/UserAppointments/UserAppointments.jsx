import React, { useState } from 'react';
import background from './../../../../../../../assets/medical/department.jpg';
import Calender from './../Calender/Calender';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    console.log(date.toString());
    setDate(date);
  };
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h3 className="text-center text-xl md:text-2xl text-blue-900 my-20">
        Your appointments
      </h3>
      <div className="flex flex-col md: flex-row justify-center items-center">
        <div className="">
          <Calender onChange={onChange} />
        </div>
        <div className="">
          <UserAppointment date={date} />
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
