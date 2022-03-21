import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Services from './Services/Services';

const MedicalHome = () => {
  return (
    <div className="" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <Banner />
      <Features />

      <Services />
    </div>
  );
};

export default MedicalHome;
