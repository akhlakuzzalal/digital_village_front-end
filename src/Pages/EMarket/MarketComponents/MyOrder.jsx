import React from 'react';

const MyOrder = () => {
  return (
    <div className="ml-10">
      <h3>My Orders</h3>
      <div className="px-6 py-2 shadow-2xl rounded-xl">
        <div className="w-full border-b-2 border-gray-900">
          <h6>Order id:#8745867gkjh</h6>
          <p>Order placed on 12/02/2022</p>
        </div>
        <div className="flex items-start justify-around px-6 py-2">
          <img
            className="w-24"
            src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/w820bt%20black/edifier-w820bt-headphone-price-in-bd-black-500x500.jpg"
            alt=""
          />
          <h6>Product name</h6>
          <p>Qty: 1</p>
          <p className="px-2 py-1 rounded-full bg-slate-500">Stutus</p>
          <p>Delevered on 15/01/2022</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
