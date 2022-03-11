import React, { useEffect, useState } from 'react';
import Appointment from './Appointment';
const AppointmentAvailable = ({ date }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/availableAppointment/getAppointment`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  console.log(appointments);

  return (
    <div className="text-center ">
      <h3
        className="  mt-20  text-2xl mb-10"
        style={{
          color: '#10217d',
        }}
      >
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex flex-wrap justify-center items-center my-5 ">
        {appointments.map((appointment) => (
          <Appointment appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentAvailable;
