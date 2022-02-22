import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../lotties/medicine.json';

const MedicineShopBanner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div
      className="bg-no-repeat bg-opacity-0 bg-cover h-[120px] md:h-[300px] mb-12"
      style={{ backgroundImage: 'url(https://i.ibb.co/dgJJWWp/medical.png)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="hidden md:flex justify-center h-[300px]">
          <img
            src="https://i.ibb.co/kJZJZry/doctor-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
          <h4 className="font-bold text-2xl">
            All the necessary medicine is here now
          </h4>
          <p>Buy personal and protective eqipment easily</p>
        </div>
        <div className="hidden w-11/12 md:flex justify-center h-[300px] mb-12">
          <Lottie
            // style={{ width: '60%' }}
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={'60%'}
          />
        </div>
      </div>
    </div>
  );
};

export default MedicineShopBanner;
