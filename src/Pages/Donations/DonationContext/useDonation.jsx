import { useContext } from 'react';
import DonationProvider from './DonationProvider';

const useDonation = () => {
    return useContext(DonationProvider);
};

export default useDonation;