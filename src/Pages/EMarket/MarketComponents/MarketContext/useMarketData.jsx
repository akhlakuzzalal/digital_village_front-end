import { useContext } from 'react';
import { DataContext } from './MarketProvider';

const useMarketData = () => {
  return useContext(DataContext);
};

export default useMarketData;
