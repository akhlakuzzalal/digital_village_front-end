import React from 'react';
import Appointment from './Appointment';

const AppointmentAvailable = ({ date }) => {
  // const [appointment, setAppointment] = useState([]);

  // useEffect(() => {
  //   fetch('./latestNewsFakeData.json')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  // console.log(appointment);

  return (
    <div className="text-center ">
      <h3 className=" heading_sm  m-5 text-3xl md:text-5xl mb-10 hover:text-blue-600">
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex  justify-center items-center my-5 ">
        <Appointment />
        <Appointment />
        <Appointment />
      </div>
    </div>
  );
};

export default AppointmentAvailable;
