import React from 'react';
import AllCauses from './AllCauses/AllCauses';
import DonationAbout from './DonationAbout/DonationAbout';
import DonationBanner from './DonationBanner/DonationBanner';

const Donations = () => {
  return (
    <>
      <DonationBanner />
      <AllCauses />
      <DonationAbout />
    </>
  );
};

export default Donations;
