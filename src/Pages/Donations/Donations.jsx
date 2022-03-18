import React from 'react';
import Causes from './Causes/Causes';
import AboutDonation from './DonateItems/AboutDonation';
import DonateBanner from './DonateItems/DonateBanner';
import TeamVolunteer from './DonateItems/TeamVolunteer';

const Donations = () => {
    return (
        <>
            <DonateBanner />
            <Causes />
            <AboutDonation/>
            <TeamVolunteer/>
        </>
    );
};

export default Donations;