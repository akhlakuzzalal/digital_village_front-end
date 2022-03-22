import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAvailableAppointments } from '../../../../redux/slices/medical/medicalSlice';
import Appointment from './Appointment';
const AppointmentAvailable = ({ date }) => {
  const allAppoinment = useSelector(
    (state) => state.medical.allAvailableAppointment
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllAvailableAppointments());
  }, []);

  return (
    <div className="text-center ">
      <h3 className="  mt-10 text-xl  md:text-2xl mb-10 text-[#10217d]">
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex flex-wrap justify-center items-center p-0 md:p-2 my-5 ">
        {allAppoinment.map((appointment) => (
          <Appointment appointment={appointment} date={date} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentAvailable;
