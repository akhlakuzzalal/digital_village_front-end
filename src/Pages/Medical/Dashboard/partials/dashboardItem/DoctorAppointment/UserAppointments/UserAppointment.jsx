import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PayModal from '../../../../../../../Components/Pay/PayModal';
import { setPayModal } from '../../../../../../../redux/slices/payModal/PayModalSlice';

const UserAppointment = ({ date }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [appointment, setAppointment] = useState([]);
  const email = 'user1@gmail.com';

  useEffect(() => {
    const url = `http://localhost:5000/appointment/findUserAppointment?email=${email}&date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [date]);
  console.log(Array.isArray(appointment));
  return (
    <div className="flex flex-col">
      <h4> Total Appointments:{appointment.length}</h4>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow-md sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Cost
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointment.map((row) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {row.service}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {row.time}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      {row.price}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                      <button
                        onClick={() => dispatch(setPayModal(true))}
                        className="bg-primary border-1 rounded-md text-white py-1 px-4"
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
