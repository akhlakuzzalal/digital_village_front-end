import React from 'react';

const CustomerOrder = () => {
  return (
    <div className="w-full">
      <h6 className="mb-6">Your ordered products</h6>
      <p className="text-right">2 Items</p>
      <div className="border-y-[1px] py-2 border-gray-400">
        {/* 1st product */}
        <div className="w-full flex items-center my-3 shadow-xl rounded-lg p-2">
          <img
            className="w-[150px] h-[100px]"
            src="https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png"
            alt=""
          />
          <div className="ml-4">
            <h6 className="mb-4">Lorem, ipsum.</h6>
            <p>
              <span className="font-semibold">$ 320</span> &times; 2
            </p>
          </div>
        </div>
        {/* second product */}
        <div className="w-full flex items-center my-3 shadow-xl rounded-lg p-2">
          <img
            className="w-[150px] h-[100px]"
            src="https://i.ibb.co/fq1j9w3/grocery-shopping-prev-ui.png"
            alt=""
          />
          <div className="ml-4">
            <h6 className="mb-4">Lorem, ipsum.</h6>
            <p>
              <span className="font-semibold">$ 320</span> &times; 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrder;
