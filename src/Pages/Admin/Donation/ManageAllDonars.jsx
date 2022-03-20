import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllDonars = () => {
  const [allDonarInfo, setAllDonarInfo] = useState([]);

  useEffect(() => {
    axios.get('/donationCause/allDonarInfo').then((response) => {
      setAllDonarInfo(response.data);
    });
  }, []);

  return (
    <div className="my-3">
      <div className="overflow-x-auto">
        <h3 className="text-center text-gray-800 text-sm md:text-lg lg:text-2xl">
          All Donars payment
        </h3>
        <p className="text-center text-gray-600 font-normal text-sm lg:text-lg">
          Admin can manage all donars payment here
        </p>
        <div className="py-2">
          <table className="w-fit mx-auto">
            <thead className="hidden lg:block bg-indigo-500 font-primary">
              <tr className="grid grid-cols-2 place-items-center">
                <th
                  scope="col"
                  className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                >
                  Cause
                </th>
                <th
                  scope="col"
                  className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                >
                  Donar
                </th>
              </tr>
            </thead>
            <tbody>
              {allDonarInfo &&
                allDonarInfo.length >= 1 &&
                allDonarInfo.map((donarInfo) => (
                  <tr
                    key={donarInfo?.causeInfo?.image?.path}
                    className="bg-white border-b font-primary text-sm grid grid-cols-2 col-start-5 col-end-12 place-items-center"
                  >
                    {/* cause info */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                      {/* cause title */}
                      <div>{donarInfo?.causeInfo?.title}</div>
                      {/* cause category */}
                      <div>{donarInfo?.causeInfo?.category}</div>
                    </td>

                    {/* donar info */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div>
                        {/* header */}
                        <div className="hidden lg:block bg-purple-500 font-primary">
                          <tr className="grid grid-cols-1 lg:grid-cols-4 place-items-center">
                            <th
                              scope="col"
                              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                            >
                              Donar
                            </th>
                            <th
                              scope="col"
                              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                            >
                              Amount
                            </th>
                            <th
                              scope="col"
                              className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                            >
                              Action
                            </th>
                          </tr>
                        </div>
                        {/* info */}
                        {donarInfo?.donarInfo &&
                          donarInfo.donarInfo.length <= 1 &&
                          donarInfo?.donarInfo.map((donar) => (
                            <div key={donar.donar._id}>
                              {console.log(donar, 'd')}
                              {/* image */}
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img
                                  className="w-48 lg:w-24 rounded-lg"
                                  src={
                                    donar?.donar?.photo?.name
                                      ? donar?.donar?.photo?.path
                                      : 'https://www.autosbangla.com/images/mercedes-benz/mercedes-benz-gle-450-img.jpg'
                                  }
                                  alt={donar?.donar?.photo?.name}
                                />
                              </td>

                              {/* donar info */}
                              <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                {donar?.donar?.name}
                                <td className="text-sm text-gray-600 py-2 whitespace-nowrap">
                                  {donar?.donar?.email}
                                </td>
                              </td>

                              {/* amount */}
                              <td className="text-sm px-6 py-4 whitespace-nowrap">
                                {donar?.amount}
                              </td>
                              {/* action */}
                              <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                                <div className="flex items-center justify-center space-x-3">
                                  <button className="bg-green-500  px-4 py-2 text-white font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300">
                                    Details
                                  </button>
                                </div>
                              </td>
                            </div>
                          ))}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllDonars;
