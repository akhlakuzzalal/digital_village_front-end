import React from 'react';
import { BsFillEyeFill } from 'react-icons/bs';
import { CgGirl } from 'react-icons/cg';
import { FaHeartbeat } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { GrRestroomWomen } from 'react-icons/gr';
import { MdFamilyRestroom } from 'react-icons/md';

const Specialist = () => {
  return (
    <div class="my-20">
      <h3 className="text-center my-10">Our Specialists</h3>
      <div className="w-full  flex flex-wrap justify-center items-center">
        <div className=" w-full md: w-1/3 flex flex-col justify-center items-center">
          <a
            href="#"
            class="w-full md:w-11/12 my-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <FaHeartbeat style={{ fontSize: '3em' }} />
            <div class=" flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cardiologists
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {' '}
                For cardiovascular conditions.
              </p>
            </div>
          </a>
        </div>

        <div className="w-full md: w-1/3 flex flex-col justify-center items-center">
          <a
            href="#"
            class=" w-full md:w-11/12 my-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <MdFamilyRestroom style={{ fontSize: '3em' }} />
            <div class=" flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Family physician
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {' '}
                For people of all ages.
              </p>
            </div>
          </a>
        </div>
        <div className="w-full md: w-1/3  flex flex-col justify-center items-center">
          <a
            href="#"
            class="w-full md:w-11/12 my-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <BsFillEyeFill style={{ fontSize: '3em' }} />
            <div class=" flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ophthalmologists
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {' '}
                specialize in eye and vision care.
              </p>
            </div>
          </a>
        </div>
        <div className=" w-full md: w-1/3  flex flex-col justify-center items-center">
          <a
            href="#"
            class=" w-full md:w-11/12 my-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <GrRestroomWomen style={{ fontSize: '3em' }} />
            <div class=" flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                gynecologists
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {' '}
                disease management for female
              </p>
            </div>
          </a>
        </div>
        <div className="w-full md: w-1/3 flex flex-col justify-center items-center">
          <a
            href="#"
            class=" w-full md:w-11/12 my-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <CgGirl style={{ fontSize: '3em' }} />
            <div class=" flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Dermatologists
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {' '}
                For diseases of the skin
              </p>
            </div>
          </a>
        </div>
        <div className="w-full md: w-1/3 flex flex-col justify-center items-center">
          <a
            href="#"
            class=" w-full md:w-11/12 my-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <GiBrain style={{ fontSize: '3em' }} />
            <div class=" flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neurologists
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {' '}
                For the nerves, spine, and brain.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
