import React from 'react';
import AllCauses from './AllCauses/AllCauses';
import AboutDonation from './DonateItems/AboutDonation';
import DonateBanner from './DonateItems/DonateBanner';

const Donations = () => {
  return (
    <>
      <DonateBanner />
      <AllCauses />
      <AboutDonation />
    </>
  );
};

export default Donations;
