import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../../api/axios';

const Status = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user?.email;
  useEffect(() => {
    axios.get(`/vaccine/findInfo?email=${email}`).then((response) => {
      if (response.data && response.data.length > 0) {
        setInfo(response.data[0]);
      }
    });
  }, [email]);
  return (
    <div className="w-full  my-20 p-0 md:p-10 min-h-screen">
      <div>
        <div class="p-0 md:p-4">
          <div class="bg-white p-0 md:p-4 rounded-md">
            <div>
              <h2 class="mb-4 text-xl font-bold text-blue-900 text-center">
                Your Status
              </h2>
              <div>
                {info?._id ? (
                  <div>
                    <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2  px-0 pmd:px-4 text-white font-bold text-md">
                      <div className="w-1/3 py-2">
                        <span>Name</span>
                      </div>
                      <div className="w-1/3 py-2">
                        <span>Email</span>
                      </div>

                      <div className="w-1/3 py-2">
                        <span>Status</span>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between border-2 text-sm font-normal mt-4 ">
                        <div class="w-1/3 py-2">
                          <span>{info?.name}</span>
                        </div>
                        <div class="w-1/3 py-2">
                          <span>{info?.email}</span>
                        </div>

                        <div class="w-1/3 py-2">
                          <span>{info?.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <h3 className="text-gray-500">You haven't register yet!</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
