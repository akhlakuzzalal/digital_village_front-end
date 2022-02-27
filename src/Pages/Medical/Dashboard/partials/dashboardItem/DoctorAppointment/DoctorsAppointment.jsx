import React, { useState } from 'react';
import AppointmentAvailable from './AppointmentAvailable/AppointmentAvailable';
import AppointmentHero from './AppointmentHero/AppointmentHero';
import Calender from './Calender/Calender';

const DoctorsAppointment = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    console.log(date.toString());
    setDate(date);
  };
  return (
    <>
      <div>
        <AppointmentHero />
        <Calender onChange={onChange} />
        <AppointmentAvailable date={date} />
      </div>
    </>
  );
};

export default DoctorsAppointment;
