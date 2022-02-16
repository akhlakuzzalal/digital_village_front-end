import React from 'react';
import Comments from './../../../components/Comments/Comments';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import News from './News/News';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Service />
      <News />
      <Reviews />
      <Comments />
    </div>
  );
};

export default Home;
