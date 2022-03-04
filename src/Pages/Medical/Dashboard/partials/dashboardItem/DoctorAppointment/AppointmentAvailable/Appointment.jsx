import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Appointment = ({ service, description, time, price }) => {
 
  const navigate = useNavigate();
  const redirect_uri = '/medical/userAppointments';

  const handleAlert = () => {
    swal({
      title: 'want to proceed?',
      // text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',

      buttons: true,
    }).then((willConfirm) => {
      if (willConfirm) {
        navigate(redirect_uri);
      }
    });
  };
  return (
    <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all duration-500">
      <div class="p-5">
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
        >
          <button onClick={handleAlert}>Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
