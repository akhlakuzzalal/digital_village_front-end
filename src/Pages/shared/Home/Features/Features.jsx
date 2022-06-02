import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard/FeatureCard';

const features = [
  {
    _id: 1,
    name: 'Quality Education',
    img: 'https://res.cloudinary.com/randomone/image/upload/v1654200217/digitalVillage/education_rfdxm0.png',
    currentActive: 0,
  },
  {
    _id: 2,
    name: 'Sustainable Development',
    img: 'https://res.cloudinary.com/randomone/image/upload/v1654200164/digitalVillage/development_ujdnun.png',
    currentActive: 1,
  },
  {
    _id: 3,
    name: 'Necessary Commodities',
    img: 'https://res.cloudinary.com/randomone/image/upload/v1654201030/digitalVillage/market_qlvye5.png',
    currentActive: 2,
  },
  {
    _id: 4,
    name: 'Medical Facilities',
    img: 'https://res.cloudinary.com/randomone/image/upload/v1654200317/digitalVillage/medical_bno14h.png',
    currentActive: 3,
  },
];

const Features = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (active === 4) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    }, 1500);
  }, [active]);

  return (
    <div className="grid grid-cols-2 place-items-center md:flex md:justify-start md:items-center text-center gap-6 lg:mt-20 md:ml-20 mx-3 text-black">
      {features.map((feature) => (
        <FeatureCard key={feature._id} feature={feature} active={active} />
      ))}
    </div>
  );
};

export default Features;
