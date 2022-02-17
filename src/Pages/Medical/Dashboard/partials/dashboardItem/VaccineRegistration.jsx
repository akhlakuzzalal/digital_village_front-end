import React from 'react';
import { Link } from 'react-router-dom';
import covax from './../../../../../Images/COVAX.jpg';

const VaccineRegistration = () => {
  return (
    <>
      <div className="text-center ">
        <h3>Vaccine Registration</h3>
        <div className="flex flex-wrap justify-center items-center m-2">
          <div class=" w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc">
            <Link to="#">
              <img class="rounded-t-lg" src={covax} alt="" />
            </Link>
            <div class="p-5">
              <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Covid-19 Vaccine
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam adipisci voluptatum deleniti iure natus porro obcaecati
                tempore unde quos facilis!
              </p>
              <Link
                to="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary "
              >
                Registration
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc">
            <Link to="#">
              <img class="rounded-t-lg" src={covax} alt="" />
            </Link>
            <div class="p-5">
              <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Covid-19 Vaccine
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam adipisci voluptatum deleniti iure natus porro obcaecati
                tempore unde quos facilis!
              </p>
              <Link
                to="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary "
              >
                Registration
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc">
            <Link to="#">
              <img class="rounded-t-lg" src={covax} alt="" />
            </Link>
            <div class="p-5">
              <Link to="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Covid-19 Vaccine
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam adipisci voluptatum deleniti iure natus porro obcaecati
                tempore unde quos facilis!
              </p>
              <Link
                to="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary "
              >
                Registration
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VaccineRegistration;
