import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUserAppointment } from '../../../../redux/slices/medical/medicalSlice';
import Calender from './../Calender/Calender';
import Procedure from './Procedure';
import UserAppointment from './UserAppointment';

const UserAppointments = () => {
  const user = useSelector((state) => state.user.user);
  const [appointment, setAppointment] = useState([]);
  const email = user.email;
  const [date, setDate] = useState(new Date().toDateString());
  const onChange = (date) => {
    console.log(date.toDateString());
    setDate(date);
  };
  // useEffect(() => {
  //   axios
  //     .get(`/appointment/findUserAppointment?email=${email}&date=${date}`)
  //     .then((response) => setAppointment(response.data));
  // }, [date, email]);
  const selectedAppointment = useSelector(
    (state) => state.medical.userAppointment
  );

  const dispatch = useDispatch();

  console.log(selectedAppointment);

  useEffect(() => {
    dispatch(showUserAppointment({ email, date }));
  }, [date, email]);

  return (
    <div className=" my-5">
      <Procedure />
      <h3 className="text-center  text-xl md:text-3xl text-blue-900 my-10">
        Your appointments
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="">
          <Calender onChange={onChange} />
        </div>
        <div className=" mx-0 md:mx-auto">
          <UserAppointment appointment={selectedAppointment} date={date} />
        </div>
      </div>
    </div>
  );
};

export default UserAppointments;
