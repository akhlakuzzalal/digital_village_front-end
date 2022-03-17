import React from 'react';

const MyOrder = () => {
  const orders = [1, 2];
  return (
    <div className="mt-[80px] mb-36 md:mb-24">
      <h3 className="text-center pt-12">My Orders</h3>
      <div className="w-full  px-10 md:px-6 ">
        {orders.map((order) => (
          <div
            key={order}
            className=" py-5 border px-5 rounded-xl mx-auto ml-6  md:mx-24 mt-6"
          >
            <div className="w-full border-b-2 border-gray-900">
              <h6 className="text-sm md:text-base">
                Order id: <span className="text-red-600 ">#8745867gkjh</span>
              </h6>
              <p>
                Order placed on{' '}
                <span className="text-blue-600">12/02/2022</span>
              </p>
            </div>
            <div className="flex items-start justify-around py-2">
              <div className="w-6 md:w-32 ">
                <img
                  className="w-full"
                  src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/w820bt%20black/edifier-w820bt-headphone-price-in-bd-black-500x500.jpg"
                  alt=""
                />
              </div>
              <h6 className="text-sm md:text-xl">Product name</h6>
              <p className="text-sm md:text-xl mx-2">Qty: 1</p>
              <p className="text-sm md:text-base    md:px-4 md:py-1 rounded-full text-white bg-blue-500">
                Stutus
              </p>
              <p className="text-sm md:text-xl">
                Delevered: <span className="text-red-600">15/01/2022</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
