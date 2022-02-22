import React, { createContext, useState } from 'react';
export const DonationContext = createContext();

const DonationProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const allContext = {
      showModal,
      setShowModal,
    };
    return (
        <DonationContext.Provider value={allContext}>{children}</DonationContext.Provider>
    );
};

export default DonationProvider;