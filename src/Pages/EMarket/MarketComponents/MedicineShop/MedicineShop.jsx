import React from 'react';
import AllMedicine from './AllMedicine/AllMedicine';
import MedicineCategories from './MedicineCategories';
import MedicineShopBanner from './MedicineShopBanner';

const MedicineShop = () => {
  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div id="medecine" className="mt-20">
        <MedicineShopBanner />
        <div className="w-11/12 mx-auto mt-10">
          <MedicineCategories />
        </div>
      </div>
      <AllMedicine />
    </div>
  );
};

export default MedicineShop;
