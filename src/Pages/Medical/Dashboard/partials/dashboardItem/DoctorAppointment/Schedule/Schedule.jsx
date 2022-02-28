import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { BsFillEyeFill} from 'react-icons/bs';
import { GrRestroomWomen} from 'react-icons/gr';
import { MdFamilyRestroom} from 'react-icons/md';
import {CgGirl} from 'react-icons/cg';
import {GiBrain} from 'react-icons/gi';
import Calender from './../Calender/Calender';

const Schedule = ({ onChange }) => {
  return (
    <div className="my-10">
      <h3 className="text-center text-4xl my-8">
        {' '}
        Take a schedule for a consultation
      </h3>
      <div className="flex justify-center items-center">
        <div className="w-full md: w-1/2 flex justify-center items-center">
          {' '}
          <Calender onChange={onChange} />
        </div>
        <div className="w-full md: w-1/2 flex flex-wrap justify-center items-center">
         <div className="w-1/2 my-1 flex flex-col justify-center items-center">
            <a
              href="#"
              class="w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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

          <div className="w-1/2 my-1  flex flex-col justify-center items-center">
            <a
              href="#"
              class=" w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              < MdFamilyRestroom style={{ fontSize: '3em' }} />
              <div class=" flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 Family  physician
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {' '}
                  For people of all ages.
                </p>
              </div>
            </a>
          </div>
          <div className="w-1/2 my-1 flex flex-col justify-center items-center">
            <a
              href="#"
              class=" w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
           <div className="w-1/2 my-1   flex flex-col justify-center items-center">
            <a
              href="#"
              class=" w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
          <div className="w-1/2 my-1  flex flex-col justify-center items-center">
            <a
              href="#"
              class=" w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
           <div className="w-1/2 my-1 flex flex-col justify-center items-center">
            <a
              href="#"
              class=" w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
    </div>
  );
};

export default Schedule;
