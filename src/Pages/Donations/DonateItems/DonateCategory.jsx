import React from 'react';
import {
  FaBookReader,
  FaHandHoldingWater,
  FaHandsHelping,
  FaHospital,
} from 'react-icons/fa';
import { FcHome, FcReading } from 'react-icons/fc';

const DonateCategory = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 ">
      <div className="flex flex-col col-span-2 md:col-span-1 justify-center items-center py-7">
        <h3 className="text-gray-800">ACHIEVED WITH YOU</h3>
        <p className="text-gray-600">We need your help</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full bg-white p-4 dark:bg-black">
        <div class="p-6 md:p-10 rounded-xl bg-blue-50 dark:dark-card-bg overflow-hidden shadow hover:shadow-md">
          <div class="inline-flex rounded-full bg-white p-4">
            <FcReading className="text-blue-500 text-4xl" />
          </div>

          <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            Education Help
          </h3>
          <p class="mt-4 text-base md:text-lg text-gray-600">
            Your feature description summary here.
          </p>
        </div>

        <div class="p-6 md:p-10 rounded-xl bg-blue-50 dark:dark-card-bg overflow-hidden shadow hover:shadow-md">
          <div class="inline-flex rounded-full bg-white p-4">
            <FcHome className="text-blue-500 text-4xl" />
          </div>

          <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            Homeless help
          </h3>
          <p class="mt-4 text-base md:text-lg text-gray-600">
            Your feature Homeless summary here.
          </p>
        </div>

        <div class="p-6 md:p-10 rounded-xl bg-blue-50 dark:dark-card-bg overflow-hidden shadow hover:shadow-md">
          <div class="inline-flex rounded-full bg-white p-4">
            <FaHospital className="text-blue-500 text-4xl" />
          </div>

          <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            Madical Treatment Help
          </h3>
          <p class="mt-4 text-base md:text-lg text-gray-600">
            Your feature description summary here.
          </p>
        </div>

        <div class="p-6 md:p-10 rounded-xl bg-blue-50 dark:dark-card-bg overflow-hidden shadow hover:shadow-md">
          <div class="inline-flex rounded-full bg-white p-4">
            <FaHandsHelping className="text-red-500 text-4xl" />
          </div>

          <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            Help poor people
          </h3>
          <p class="mt-4 text-base md:text-lg text-gray-600">
            Your feature description summary here.
          </p>
        </div>
        <div class="p-6 md:p-10 rounded-xl bg-blue-50 dark:dark-card-bg overflow-hidden shadow hover:shadow-md">
          <div class="inline-flex rounded-full bg-white p-4">
            <FaBookReader className="text-secondary text-4xl" />
          </div>

          <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            Save the Humanity
          </h3>
          <p class="mt-4 text-base md:text-lg text-gray-600">
            Your feature description summary here.
          </p>
        </div>
        <div class="p-6 md:p-10 rounded-xl bg-blue-50 dark:dark-card-bg overflow-hidden shadow hover:shadow-md">
          <div class="inline-flex rounded-full bg-white p-4">
            <FaHandHoldingWater className="text-green-500 text-4xl" />
          </div>

          <h3 class="mt-4 text-base md:text-xl font-medium text-gray-800">
            Water pump Help
          </h3>
          <p class="mt-4 text-base md:text-lg text-gray-600">
            Your feature description summary here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonateCategory;
