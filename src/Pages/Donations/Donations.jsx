import React from 'react';
import Causes from './Causes/Causes';
import DonateBanner from './DonateItems/DonateBanner';
import DonateCategory from './DonateItems/DonateCategory';

const Donations = () => {
    return (
        <>
            <DonateBanner />
            <Causes />
            <DonateCategory/>
        </>
    );
};

export default Donations;