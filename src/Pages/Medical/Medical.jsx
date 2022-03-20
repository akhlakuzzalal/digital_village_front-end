import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Medical = () => {
  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Banner />
      <Features />

      <Services />
    </div>
  );
};

export default Medical;
