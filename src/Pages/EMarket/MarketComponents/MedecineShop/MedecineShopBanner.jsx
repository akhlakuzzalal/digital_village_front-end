import React from 'react';

const MedecineShopBanner = () => {
    return (
        <div className='bg-no-repeat bg-opacity-0 bg-cover h-[380px]' style={{backgroundImage:'url(https://i.ibb.co/dgJJWWp/medical.png)'}}>
            <div className='grid grid-cols-3'>
            <div className='flex justify-center h-[300px]'>
                <img src="https://i.ibb.co/kJZJZry/doctor-removebg-preview.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='font-bold text-2xl'>All the necessary medicine is here now</h4>
                    <p>Buy personal and protective eqipment easily</p>
                </div>
                <div className='flex justify-center h-[300px]'>
                <img src="https://i.ibb.co/bNMLn9n/medecine-removebg-preview.png" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default MedecineShopBanner;