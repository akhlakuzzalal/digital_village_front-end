import React, { useState } from 'react';
import AppointmentAvailable from './AppointmentAvailable/AppointmentAvailable';
import AppointmentHero from './AppointmentHero/AppointmentHero';
import CardAppointment from './AppointmentHero/CardAppointment';
import Schedule from './Schedule/Schedule';

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
        <CardAppointment />
        <Schedule onChange={onChange} />

        <AppointmentAvailable date={date} />
      </div>
    </>
  );
};

export default DoctorsAppointment;
