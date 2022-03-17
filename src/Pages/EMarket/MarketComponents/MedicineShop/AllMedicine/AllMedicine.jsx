import React from 'react';
import PopularMedicine from './PopularMedicine';
import RegularMedicine from './RegularMedicine';

const AllMedicine = () => {
  const medicines = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid grid-cols-6 mt-20 mb-32">
      <div className="col-span-6 md:col-span-4 order-2 md:order-1">
        {/* RegularMedicine */}
        <h6 className="inline border-b-2 border-black ml-6 md:ml-14">
          Regular Medicines
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-11/12 mx-auto mt-6">
          {medicines.map((medicine) => (
            <RegularMedicine key={medicine} />
          ))}
        </div>
      </div>
      {/* PopularMedicine */}
      <div className="col-span-6 md:col-span-2 order-1 md:order-2">
        <PopularMedicine />
      </div>
    </div>
  );
};

export default AllMedicine;
