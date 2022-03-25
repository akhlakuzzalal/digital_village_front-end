import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';

const OurDoctors = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-base font-bold text-black dark:text-white">
          We have the best Doctors
        </h2>
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl font-heading text-gray-900">
          Check our awesome Event Doctors.
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full rounded-lg p-12 flex flex-col justify-center items-center bg-gradient-to-r bg-gray-300">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded h-36 w-36"
              src="https://codexlayer.com/html/ayuda/images/resource/volunter-1.jpg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">
              Dr.Williams Halimto
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className="  block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full bg-gray-300 rounded-lg p-12 flex flex-col justify-center items-center ">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded h-36 w-36"
              src="https://codexlayer.com/html/ayuda/images/resource/volunter-2.jpg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Dr.Jannie Allan</p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full  rounded-lg p-12 flex flex-col justify-center items-center bg-gray-300">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded h-36 w-36"
              src="https://codexlayer.com/html/ayuda/images/resource/volunter-4.jpg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Dr. Dan Jones</p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full bg-gray-300 rounded-lg p-12 flex flex-col justify-center items-center ">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded h-36 w-36"
              src="https://www.nvfs.org/wp-content/uploads/2017/03/featured-individual-volunteer.jpg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Dr. Dany Bailey</p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full  rounded-lg p-12 flex flex-col justify-center items-center bg-gray-300">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded h-36 w-36"
              src="https://c.neh.tw/thumb/f/720/a5391afa9c234d129fb2.jpg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">Dr. Lucy Carter</p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full  rounded-lg p-12 flex flex-col justify-center items-center bg-gray-300">
          <div className="mb-8">
            <img
              className="object-center object-cover rounded h-36 w-36"
              src="https://pikwizard.com/photos/3e3a84c092b4ec7dad7201ae11129727-m.jpg"
              alt="photo"
            />
          </div>
          <div className="text-center">
            <p className="text-xl text-white font-bold mb-2">
              Dr. Jade Bradley
            </p>
            <p className="text-base text-gray-400 font-normal">Doctor</p>
          </div>
          <ul className="flex flex-row mt-4 space-x-2">
            <li className="uppercase p-3 flex items-center border border-blue-600 text-blue-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <BsFacebook className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-900 text-blue-900 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialLinkedinCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
            <li className="uppercase p-3 flex items-center border border-blue-400 text-blue-400 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12 justify-center">
              <a
                target="_blank"
                href="https://web.facebook.com/"
                className=" block"
                rel="noreferrer"
              >
                <TiSocialTwitterCircular className="h-10 w-10 text-center block" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;