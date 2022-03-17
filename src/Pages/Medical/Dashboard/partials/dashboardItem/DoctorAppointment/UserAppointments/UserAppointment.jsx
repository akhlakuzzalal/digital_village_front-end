import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../../../../../api/axios';
import PayModal from '../../../../../../../Components/Pay/PayModal';
import { setPayModal } from '../../../../../../../redux/slices/payModal/PayModalSlice';

const UserAppointment = ({ date }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [appointment, setAppointment] = useState([]);
  const email = user.email;
  const Sdate = date.toLocaleDateString();

  useEffect(() => {
    axios
      .get(`/appointment/findUserAppointment?email=${email}&date=${Sdate}`)
      .then((response) => setAppointment(response.data));
  }, [Sdate]);

  return (
    <div className="flex flex-col ">
      <h4 className="my-5"> Total Appointments:{appointment.length}</h4>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full px-0 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr className="bg-blue-900 ">
                  <th
                    scope="col"
                    className="py-3 px-0 md:px-6 text-xs  tracking-wider text-left text-white uppercase dark:text-gray-400"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-0 md:px-6 text-xs   text-left text-white uppercase dark:text-gray-400"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-0 md:px-6 text-xs   text-left text-white uppercase dark:text-gray-400"
                  >
                    Cost
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-0 md:px-6 text-xs  text-left text-white uppercase dark:text-gray-400"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointment.map((row) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-0 md:px-6 text-xs text-gray-900 dark:text-white">
                      {row.service}
                    </td>
                    <td className="py-4 px-0 md:px-6 text-x text-gray-500 dark:text-gray-400">
                      {row.time}
                    </td>
                    <td className="py-4 px-0 md:px-6 text-xs text-gray-500  dark:text-gray-400">
                      {row.price}
                    </td>
                    <td className="py-4 px-0 md:px-6 text-xs text-gray-500 dark:text-gray-400">
                      <button
                        onClick={() => dispatch(setPayModal(true))}
                        className="bg-blue-900 border-1 rounded-md text-white py-1 px-4"
                      >
                        Pay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PayModal price={200} id={34} returnPage={'medical/appointment'} />
    </div>
  );
};

export default UserAppointment;
