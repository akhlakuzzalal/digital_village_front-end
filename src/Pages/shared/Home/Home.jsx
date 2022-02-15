import React from 'react';
import LatestNews from '../Home/LatestNews/LatestNews';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Service />
      <LatestNews />

      <Reviews />
    </div>
  );
};

export default Home;
