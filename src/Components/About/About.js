import React from 'react';

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat w-100 lg:h-[600px]"
        style={{
          backgroundImage: `url(https://travel.state.gov/content/travel/en/us-visas/business/_jcr_content/tsg-rwd-content-page-parsysxxx/slideshow.img.png/1595428772152.png)`,
        }}
      ></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <img src="" alt="" />
      </div>
      <div className="bg-gray-100 py-5 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-4">
          <div className="flex flex-col  bg-white rounded-lg mx-auto  md:ml-5  md:flex-row md:max-w-xl     hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className=" h-20 w-20 md:h-20 md:w-20 pt-5"
              src="https://cdn-icons.flaticon.com/png/128/3213/premium/3213003.png?token=exp=1645161063~hmac=1c249334d03ba80cce190094b31dfa06"
              alt=""
            />

            <div className="flex flex-col justify-between p-2 leading-normal">
              <h1 className="text-2xl md:text-3xl lg:text-3xl hover:text-blue-600 font-bold">
                High-Quality Education
              </h1>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Urna porttitor rhoncus dolor purus non enim praesent elementum
                facilisis. Facilisi morbi tempus iaculis urna id volutpat lacus
                laoreet. Venenatis cras sed felis eget velit volutpat ac
                tincidunt
              </p>
              <button className="btn bg-blue-600 py-2 px-6 md:w-2/6  font-bold text-white rounded">
                <p>View More</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col  bg-white rounded-lg mx-auto  md:ml-5  md:flex-row md:max-w-xl     hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className=" h-20 w-20 md:h-20 md:w-20 pt-5"
              src="https://uxwing.com/wp-content/themes/uxwing/download/21-medical-science-lab/medical.png"
              alt=""
            />

            <div className="flex flex-col justify-between p-2 leading- hover:text-blue-600">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                High-Quality Medical Service
              </h1>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Urna porttitor rhoncus dolor purus non enim praesent elementum
                facilisis. Facilisi morbi tempus iaculis urna id volutpat lacus
                laoreet. Venenatis cras sed felis eget velit volutpat ac
                tincidunt
              </p>
              <button className="btn bg-blue-600 py-2 px-6 md:w-2/6  font-bold text-white rounded">
                <p>View More</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col  bg-white rounded-lg mx-auto  md:ml-5  md:flex-row md:max-w-xl     hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className=" h-20 w-20 md:h-20 md:w-20 pt-5"
              src="https://cdn-icons-png.flaticon.com/512/4357/4357367.png"
              alt=""
            />

            <div className="flex flex-col justify-between p-2 hover:text-blue-600 leading-normal">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold hover:text-blue-600">
                E-commerce
              </h1>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Urna porttitor rhoncus dolor purus non enim praesent elementum
                facilisis. Facilisi morbi tempus iaculis urna id volutpat lacus
                laoreet. Venenatis cras sed felis eget velit volutpat ac
                tincidunt
              </p>
              <button className="btn bg-blue-600 py-2 px-6 md:w-2/6  font-bold text-white rounded">
                <p>View More</p>
              </button>
            </div>
          </div>

          <div className="flex flex-col  bg-white rounded-lg md:ml-5  md:flex-row mx-auto    md:max-w-xl     hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className=" h-20 w-20 md:h-20 md:w-20 pt-5"
              src="https://cdn-icons-png.flaticon.com/128/3349/3349234.png"
              alt=""
            />

            <div className="flex flex-col justify-between p-2 hover:text-blue-600 leading-normal">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                Donation
              </h1>
              <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">
                Urna porttitor rhoncus dolor purus non enim praesent elementum
                facilisis. Facilisi morbi tempus iaculis urna id volutpat lacus
                laoreet. Venenatis cras sed felis eget velit volutpat ac
                tincidunt
              </p>
              <button className="btn bg-blue-600 py-2 px-6 md:w-2/6  font-bold text-white rounded">
                <p>View More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
