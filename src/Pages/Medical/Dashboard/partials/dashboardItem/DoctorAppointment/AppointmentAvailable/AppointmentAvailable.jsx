import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

// import Appointment from './Appointment';

const AppointmentAvailable = ({ date }) => {
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/availableAppointment/getAppointment')
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  console.log(appointment);
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
    <div className="text-center ">
      <h3 className="  mt-20  text-2xl mb-10">
        Available Appointment <br /> on {date.toDateString()}
      </h3>
      <div className="flex flex-wrap justify-center items-center my-5 ">
        <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all  border-b-indigo-500 duration-500">
          <div class="p-5">
            <Link to="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
                Consultation
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Any types of routine checkups and screening tests, give you flu
              and immunization shots.
            </p>

            <p className="my-.5">(from 11am to 5pm ) </p>
            <p>Cost : 10$ </p>
            <Link
              to="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg "
            >
              <button onClick={handleAlert}>Book Appointment</button>
            </Link>
          </div>
        </div>

        <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all  border-b-indigo-500 duration-500">
          <div class="p-5">
            <Link to="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
                dental
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Any of a variety of treatments of the teeth and adjacent tissues
              to restore or maintain normal oral
            </p>

            <p className="my-.5">(from 10am to 5pm) </p>
            <p>Cost : 15$</p>
            <Link
              to="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg "
            >
              <button onClick={handleAlert}>Book Appointment</button>
            </Link>
          </div>
        </div>

        <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all border-b-indigo-500 duration-500">
          <div class="p-5">
            <Link to="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
                eye care
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Any types of checkups prevention or minimization of threats to eye
              or visual integrity.
            </p>

            <p className="my-.5">(from 11am to 8pm) </p>
            <p>Cost : 15$ </p>
            <Link
              to="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg "
            >
              <button onClick={handleAlert}>Book Appointment</button>
            </Link>
          </div>
        </div>

        <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all border-b-indigo-500 duration-500">
          <div class="p-5">
            <Link to="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
                ENT physician
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              concerned with the treatment of disorders of the ears, nose, and
              throat.
            </p>

            <p className="my-.5">(from 10am to 11pm) </p>
            <p>Cost : 20$ </p>
            <Link
              to="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg "
            >
              <button onClick={handleAlert}>Book Appointment</button>
            </Link>
          </div>
        </div>

        <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all  border-b-indigo-500 duration-500">
          <div class="p-5">
            <Link to="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
                Maternity care
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              the health services provided to women, babies, and families
              throughout the whole pregnancy
            </p>

            <p className="my-.5">(from 8qm to 12pm) </p>
            <p>Cost : 10$ </p>
            <Link
              to="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg "
            >
              <button onClick={handleAlert}>Book Appointment</button>
            </Link>
          </div>
        </div>

        <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all border-b-indigo-500 duration-500">
          <div class="p-5">
            <Link to="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight hover:text-blue-600 text-gray-900 dark:text-white">
                Orthopedic
              </h5>
            </Link>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              specialize in injuries of the musculoskeletal system — which
              includes bones.
            </p>

            <p className="my-.5">10am to 5pm</p>
            <p>Cost :20$ </p>
            <Link
              to="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg "
            >
              <button onClick={handleAlert}>Book Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentAvailable;
