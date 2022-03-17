import React from 'react';
import Causes from './Causes/Causes';
import AboutDonation from './DonateItems/AboutDonation';
import DonateBanner from './DonateItems/DonateBanner';

const Donations = () => {
    return (
        <>
            <DonateBanner />
            <Causes />
            <AboutDonation/>
        </>
    );
};

export default Donations;