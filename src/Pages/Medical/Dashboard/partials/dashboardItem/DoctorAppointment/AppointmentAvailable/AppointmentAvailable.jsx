import React, { useEffect, useState } from 'react';
import Appointment from './Appointment';
// import Appointment from './Appointment';

const AppointmentAvailable = ({ date }) => {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    fetch('./appointment.json')
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  console.log(appointment);

  return (
    <div className="text-center ">
      <h3 className="  mt-20  text-2xl mb-10">
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex flex-wrap justify-center items-center my-5 ">
        <Appointment
          key={appointment.id}
          appointment={appointment}
        ></Appointment>
      </div>
    </div>
  );
};

export default AppointmentAvailable;
