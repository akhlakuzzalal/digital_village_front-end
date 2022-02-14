import React, { useState } from 'react';
import {
  FcCalendar,
  FcDonate,
  FcGraduationCap,
  FcHome,
  FcShop,
} from 'react-icons/fc';
import { MdLocalHospital } from 'react-icons/md';
import donate from './../../../../assets/donate.png';
import event from './../../../../assets/event.png';
import appointment from './../../../../assets/healthcare.png';
import learn from './../../../../assets/learn.png';
import pepole from './../../../../assets/learn2.png';
import ServiceBoard from './ServiceBoard/ServiceBoard';

const services = [
  {
    icon: <FcGraduationCap className="text-center" size={70} />,
    name: 'Digital Learning',
    desc: 'Digital Village Service!',
    controlData: 'learn',
  },
  {
    icon: <MdLocalHospital className="text-center" size={70} />,
    name: 'Healthcare',
    desc: 'Digital Village Service!',
    controlData: 'healthcare',
  },
  {
    icon: <FcHome className="text-center" size={70} />,
    name: 'Village Pepole',
    desc: 'Digital Village Service!',
    controlData: 'people',
  },
  {
    icon: <FcDonate className="text-center" size={70} />,
    name: 'Donations',
    desc: 'Digital Village Service!',
    controlData: 'donation',
  },
  {
    icon: <FcShop className="text-center" size={70} />,
    name: 'E-Market',
    desc: 'Digital Village Service!',
    controlData: 'e-market',
  },
  {
    icon: <FcCalendar className="text-center" size={70} />,
    name: 'Events',
    desc: 'Digital Village Service!',
    controlData: 'events',
  },
];

const Service = () => {
  const [control, setControl] = useState('learn');

  return (
    <section
      id="service"
      className="space-y-6 md:space-y-0 flex flex-wrap py-8"
    >
      <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24">
        <div className="grid gap-4 grid-cols-2">
          {services.map((service) => (
            <ServiceBoard
              key={service.name}
              setControl={setControl}
              control={control}
              service={service}
            ></ServiceBoard>
          ))}
        </div>
      </div>

      {/* Digital Learning */}
      {control === 'learn' && (
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24">
          <div className="flex items-center justify-center">
            <img src={learn} alt="village" className="w-full md:w-1/2 " />
          </div>
          <p className="text-ellipsis">
            Our project sector is e-governance. It will be a great platform to
            connect villagers with the village administration.
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="hover:bg-green-400 group flex items-center rounded-md bg-green-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Explore
            </a>
          </div>
        </div>
      )}

      {/* Healthcare */}
      {control === 'healthcare' && (
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24">
          <div className="flex items-center justify-center">
            <img src={appointment} alt="village" className="w-full md:w-1/2" />
          </div>

          <p className="text-ellipsis overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id
            cupiditate fuga distinctio quia necessitatibus repudiandae! Iste
            illum quaerat eos, aliquam eligendi sit asperiores dolorem odit,
            iure, sed molestiae accusantium?
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="hover:bg-green-400 group flex items-center rounded-md bg-green-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Digital Learning
            </a>
          </div>
        </div>
      )}

      {/* Development proposal */}
      {control === 'pepole' && (
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24">
          <div className="flex items-center justify-center">
            <img src={pepole} alt="village" className="w-full md:w-1/2" />
          </div>
          <p className="text-ellipsis overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id
            cupiditate fuga distinctio quia necessitatibus repudiandae! Iste
            illum quaerat eos, aliquam eligendi sit asperiores dolorem odit,
            iure, sed molestiae accusantium?
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="hover:bg-green-400 group flex items-center rounded-md bg-green-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Digital Learning
            </a>
          </div>
        </div>
      )}

      {/* donation */}
      {control === 'donation' && (
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24">
          <div className="flex items-center justify-center">
            <img src={donate} alt="village" className="w-full md:w-1/2" />
          </div>
          <p className="text-ellipsis overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id
            cupiditate fuga distinctio quia necessitatibus repudiandae! Iste
            illum quaerat eos, aliquam eligendi sit asperiores dolorem odit,
            iure, sed molestiae accusantium?
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="hover:bg-green-400 group flex items-center rounded-md bg-green-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Digital Learning
            </a>
          </div>
        </div>
      )}

      {/* e market */}
      {control === 'e-market' && (
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24">
          <div className="flex items-center justify-center">
            <img
              src="https://weirdguru.com/wp-content/uploads/2020/12/custom-ecommerce-website-development-vector-image.png"
              alt="village"
              className="w-full md:w-1/2"
            />
          </div>
          <p className="text-ellipsis overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id
            cupiditate fuga distinctio quia necessitatibus repudiandae! Iste
            illum quaerat eos, aliquam eligendi sit asperiores dolorem odit,
            iure, sed molestiae accusantium?
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="hover:bg-green-400 group flex items-center rounded-md bg-green-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Digital Learning
            </a>
          </div>
        </div>
      )}

      {/* events */}
      {control === 'events' && (
        <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-center md:pl-24">
          <div className="flex items-center justify-center">
            <img src={event} alt="village" className="w-full md:w-1/2" />
          </div>
          <p className="text-ellipsis overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum id
            cupiditate fuga distinctio quia necessitatibus repudiandae! Iste
            illum quaerat eos, aliquam eligendi sit asperiores dolorem odit,
            iure, sed molestiae accusantium?
          </p>
          <div className="flex items-center justify-center">
            <a
              href="/"
              className="hover:bg-green-400 group flex items-center rounded-md bg-green-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Digital Learning
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Service;
