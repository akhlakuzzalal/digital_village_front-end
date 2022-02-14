import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import LatestNews from '../Home/LatestNews/LatestNews';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Service />
      <LatestNews />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
