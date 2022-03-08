import React from 'react';

const MyOrder = () => {
  const orders = [1, 2];
  return (
    <div className="mt-[80px] mb-36 md:mb-24">
      <h3 className="text-center">My Orders</h3>
      {orders.map((order) => (
        <div
          key={order}
          className="px-6 py-2 shadow-2xl rounded-xl w-11/12 mx-auto mt-6"
        >
          <div className="w-full border-b-2 border-gray-900">
            <h6>Order id:#8745867gkjh</h6>
            <p>Order placed on 12/02/2022</p>
          </div>
          <div className="flex items-start justify-around px-6 py-2">
            <div className="w-32">
              <img
                className="w-full"
                src="https://www.techlandbd.com/image/cache/catalog/Headphone-Headset/w820bt%20black/edifier-w820bt-headphone-price-in-bd-black-500x500.jpg"
                alt=""
              />
            </div>
            <h6>Product name</h6>
            <p>Qty: 1</p>
            <p className="px-2 py-1 rounded-full bg-slate-500">Stutus</p>
            <p>Delevered on 15/01/2022</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
