import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import LatestNews from '../Home/LatestNews/LatestNews';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
