import React from 'react';
import PayModal from '../Pay/PayModal';
import BillingAddress from './BillingAddress';
import CustomerOrder from './CustomerOrder';

const Checkout = () => {
  return (
    <div
      className="mt-[100px]  md:mx-20 mx-5"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      <div className="w-full grid grid-cols-6">
        <div className="col-span-6 md:col-span-4">
          <BillingAddress></BillingAddress>
        </div>
        <div className="col-span-6 md:col-span-2 md:ml-10 mt-6 md:mt-0">
          <CustomerOrder></CustomerOrder>
        </div>
      </div>
      <PayModal></PayModal>
    </div>
  );
};

export default Checkout;
