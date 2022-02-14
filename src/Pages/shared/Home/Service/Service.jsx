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
import healthcare from './../../../../assets/healthcare.png';
import learn from './../../../../assets/learn.png';
import people from './../../../../assets/learn2.png';
import ServiceBoard from './ServiceBoard/ServiceBoard';
import ServiceExplore from './ServiceExplore/ServiceExplore';

const services = [
  {
    icon: <FcGraduationCap className="text-center" size={70} />,
    name: 'Digital Learning',
    image: learn,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'learn',
  },
  {
    icon: <MdLocalHospital className="text-center" size={70} />,
    name: 'Healthcare',
    image: healthcare,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'healthcare',
  },
  {
    icon: <FcHome className="text-center" size={70} />,
    name: 'Village people',
    image: people,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'people',
  },
  {
    icon: <FcDonate className="text-center" size={70} />,
    name: 'Donations',
    image: donate,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'donation',
  },
  {
    icon: <FcShop className="text-center" size={70} />,
    name: 'E-Market',
    image:
      'https://weirdguru.com/wp-content/uploads/2020/12/custom-ecommerce-website-development-vector-image.png',
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
    desc: 'Digital Village Service!',
    controlData: 'e-market',
  },
  {
    icon: <FcCalendar className="text-center" size={70} />,
    name: 'Events',
    image: event,
    detail:
      'Our project sector is e-governance. It will be a great platform to connect villagers with the village administration.',
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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center">
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

      {services.map(
        (service) =>
          control === service.controlData && (
            <ServiceExplore key={service.name} service={service} />
          )
      )}
    </section>
  );
};

export default Service;
