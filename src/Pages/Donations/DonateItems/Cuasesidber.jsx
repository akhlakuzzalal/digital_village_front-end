import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCuases } from '../../../redux/slices/Donations/donationSlice';
import Cardcausesidber from './Cardcausesidber';

const Cuasesidber = () => {
  const causes = useSelector((state) => state.donation.causes);
  // console.log(causes);
  
     const dispatch = useDispatch();
     useEffect(() => {
       dispatch(fetchAllCuases());
     }, []);
    return (
        <aside class="w-full md:w-1/3 flex flex-col items-center px-3">
            {/* About */}
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">About Us</p>
            <p class="pb-2 text-gray-700 ">
              Digital village is a more service online platform.sit amet,
              consectetur adipiscing elit. Maecenas mattis est eu odio sagittis
              tristique. Vestibulum ut finibus leo. In hac habitasse platea
              dictumst.
            </p>
            <a
              href="/about"
              class="w-full bg-primary hover:bg-opacity-80 text-white font-bold text-sm uppercase rounded flex items-center justify-center px-2 py-3 mt-4"
            >
             More About
            </a>
          </div>
            {/* Donation card */}
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Donation</p>
            <div class="grid grid-cols-1 gap-3 overflow-y-auto h-96">
              
            {causes?.map((item) => {
          return <Cardcausesidber key={item._id} {...item} />;
        })}
            </div>
          </div>
          {/* photo */}
          <div class="w-full bg-white shadow flex flex-col my-4 p-6">
            <p class="text-xl font-semibold pb-5">Donation Photo</p>
            <div class="grid grid-cols-3 gap-3">
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                alt="fgdg"
              />
              <img
                class="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                alt="fgdg"
              />
            </div>
          </div>
        </aside>
    );
};

export default Cuasesidber;