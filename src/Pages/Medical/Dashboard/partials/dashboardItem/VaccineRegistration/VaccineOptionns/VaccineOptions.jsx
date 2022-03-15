import React from 'react';
import { Link } from 'react-router-dom';
import covax from './../../../../../../../assets/medical/COVAX.jpg';
import hepatitis from './../../../../../../../assets/medical/hepatitis.jpg';
import polio from './../../../../../../../assets/medical/polio.jpg';

const VaccineOptions = () => {
  return (
    <div className="text-center  my-32">
      <h3 className="text-blue-900  py-3 ">Vaccine Registration</h3>
      <div className="flex flex-wrap justify-center items-center m-2">
        <div
          className=" w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all duration-500 pb-3 "
          style={{
            borderBottom: '5px solid #10217d',
          }}
        >
          <Link to="#">
            <img className="rounded-t-lg" src={covax} alt="" />
          </Link>
          <div className="p-5">
            <Link to="#">
              <h5 className="mb-2 text-1xl md:text-2xl  font-bold tracking-tight text-blue-900 dark:text-white">
                Covid-19 Vaccination
              </h5>
            </Link>
            <p className="mb-3 text-center  hover:text-justify font-normal text-gray-700 dark:text-gray-400">
              Equitable access to safe and effective vaccines is critical to
              ending the COVID-19 pandemic, so it is hugely encouraging to see
              so many vaccines proving and going into development.
            </p>
            <Link
              to="/medicalDashboard/regForm"
              className="inline-flex items-center py-2 px-3 text-sm   font-medium text-center text-white "
              style={{
                backgroundColor: '#10217d',
                color: 'white',
              }}
            >
              Registration
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div
          className=" w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all duration-500 pb-3 "
          style={{
            borderBottom: '5px solid #10217d',
          }}
        >
          <Link to="#">
            <img className="rounded-t-lg " src={hepatitis} alt="" />
          </Link>
          <div className="p-5">
            <Link to="#">
              <h5 className="mb-2 text-1xl md:text-2xl  font-bold tracking-tight text-blue-900 dark:text-white">
                Hepatitis A Vaccination
              </h5>
            </Link>
            <p className="mb-3 text-center  hover:text-justify font-normal text-gray-700 dark:text-gray-400">
              Hepatitis A is a liver disease caused by the hepatitis A virus
              (HAV). Hepatitis A can affect anyone. Vaccines are available for
              long-term prevention of HAV infection in persons 1 year of age and
              older.
            </p>
            <Link
              to="/medicalDashboard/regForm"
              className="inline-flex items-center py-2 px-3 text-sm   font-medium text-center text-white "
              style={{
                backgroundColor: '#10217d',
                color: 'white',
              }}
            >
              Registration
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div
          className=" w-full md:w-1/4 m-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ccc hover:scale-110 transition-all duration-500 pb-3 "
          style={{
            borderBottom: '5px solid #10217d',
          }}
        >
          <Link to="#">
            <img className="rounded-t-lg" src={polio} alt="" />
          </Link>
          <div className="p-5">
            <Link to="#">
              <h5 className="mb-2 text-1xl md:text-2xl  font-bold tracking-tight text-blue-900 dark:text-white">
                Polio Vaccination
              </h5>
            </Link>
            <p className="mb-3 text-center  hover:text-justify font-normal text-gray-700 dark:text-gray-400">
              Polio, or poliomyelitis, is a crippling and potentially deadly
              disease. It is caused by the poliovirus. The virus spreads from
              person to person and can invade an infected person’s brain and
              spinal cord
            </p>
            <Link
              to="/medicalDashboard/regForm"
              className="inline-flex items-center py-2 px-3 text-sm   font-medium text-center text-white "
              style={{
                backgroundColor: '#10217d',
                color: 'white',
              }}
            >
              Registration
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineOptions;
