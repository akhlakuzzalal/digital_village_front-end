import React from 'react';

const ConfirmPayment = () => {
  const orders = [1, 2];
  return (
    <div className="mt-[84px]">
      <h3 className="text-center">
        Congrass...!! You have already paid for this order.
      </h3>
      <h6 className="text-center">Please confirm the order</h6>
      <table className="max-w-screen-xl mx-auto">
        <thead className="hidden lg:block bg-indigo-500 font-primary">
          <tr className="grid grid-cols-1 lg:grid-cols-6 place-items-center">
            <th
              scope="col"
              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
            >
              Details
            </th>
            <th
              scope="col"
              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
            >
              Message
            </th>
            <th
              scope="col"
              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
            >
              Status
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                Action
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="space-y-2">
          {orders?.map((order) => (
            <tr
              key={order}
              className="bg-white shadow-md md:shadow-none border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-6 place-items-center"
            >
              <td className="text-sm text-gray-600 px-6 py-4 break-all">
                Product Name
                <td className="text-sm text-gray-600 py-2whitespace-nowrap">
                  Brand
                </td>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <td className="text-sm text-gray-500 px-6 py-4 break-all">
                  Categorie
                </td>
              </td>
              <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                sylhet,bangladesh
                <td className="text-sm text-gray-500 py-2 whitespace-nowrap">
                  Mon Mar 14 2022
                </td>
              </td>
              <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                <button className="px-6 py-2 font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent">
                  Details
                </button>
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap">
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full font-primary">
                  Pending
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                <div className="flex items-center justify-center space-x-3">
                  <button className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300">
                    Approve
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center py-4">
        <button className="bg-primary px-6 py-2 rounded-md">
          Confirm order
        </button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
