import React, { useEffect, useState } from 'react';
import axios from '../../../../api/axios';
import Appointment from './Appointment';
const AppointmentAvailable = ({ date }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get('/availableAppointment/getAppointment')
      .then((res) => setAppointments(res.data));
  }, []);

  return (
    <div className="text-center ">
      <h3 className="  mt-10 text-xl  md:text-2xl mb-10 text-[#10217d]">
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex flex-wrap justify-center items-center p-0 md:p-2 my-5 ">
        {appointments.map((appointment) => (
          <Appointment appointment={appointment} date={date} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentAvailable;
