import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useMediaQuery from './../../../../../../../hooks/useMediaQuery';
import animationData from './../../../../../../../lotties/medicalService.json';

const Appointment = (props) => {
  const user = useSelector((state) => state.user.user);
  console.log(props);
  const { service, time, price, description } = props.appointment;
  const email = user.email;
  const name = user.name;
  const date = props.date.toDateString();
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const navigate = useNavigate();
  const redirect_uri = '/medicalDashboard/userAppointments';

  const handleAlert = () => {
    const data = { name, email, service, date, time, price };
    fetch('http://localhost:5000/appointment/addAppointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          title: 'Want to proceed?',
          // text: 'Once deleted, you will not be able to recover this imaginary file!',
          icon: 'warning',

          buttons: true,
        }).then((willConfirm) => {
          if (willConfirm) {
            console.log('ok');
            swal('Registration Done', {
              icon: 'success',
            });
          }
        });
      });
    navigate(redirect_uri);
  };
  return (
    <div
      class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all duration-500"
      style={{
        borderBottom: '5px solid #10217d',
      }}
    >
      <div class="p-5">
        <div className="w-fit mx-auto">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={isDesktop ? 200 : isTablet ? 100 : 50}
          />
        </div>
        <Link to="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
            {service}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>

        <p className="my-.5">(from {time}) </p>
        <p>Cost : {price} </p>
        <Link
          to="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg "
          style={{
            backgroundColor: '#10217d',
            color: 'white',
          }}
        >
          <button onClick={handleAlert}>Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
