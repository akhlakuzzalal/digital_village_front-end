import React from 'react';
import Footer from '../Home/Footer/Footer';
import LatestNews from '../Home/LatestNews/LatestNews';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
