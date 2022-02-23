import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const MarketProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const allContext = {
    showModal,
    setShowModal,
  };
  return (
    <DataContext.Provider value={allContext}>{children}</DataContext.Provider>
  );
};

export default MarketProvider;
