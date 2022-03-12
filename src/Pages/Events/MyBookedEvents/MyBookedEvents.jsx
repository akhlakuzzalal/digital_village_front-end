import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import axios from '../../../api/axios';
import useFirebase from '../../../hooks/useFirebase';
const MyBookedEvents = () => {
  const { user } = useFirebase();
  const [myBookingEvents, setMyBookingEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`/event/myBookingEvents?email=${user.email}`)
      .then((response) => setMyBookingEvents(response.d));
  });

  const handleCancelBookingEvent = (id) => {
    axios
      .put(`/event/deleteMyBooking?id=${id}&email=${user.email}`)
      .then(() => {
        swal('Good job!', 'Successfully Deleted!', 'success');
      });
  };

  return (
    <>
      <div className="bg-[#13273b] w-full h-20"></div>
      <h3 className=" text-lg mx-5 my-10">
        Welcome <span className="text-primary">{user?.name}</span> your all
        booking events
      </h3>
      <div className="flex flex-col mt-20">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  {/* <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 "
                    >
                      Index
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Role
                    </th>
                  </tr> */}
                </thead>
                <tbody>
                  {myBookingEvents.map((data, i) => (
                    <tr key={data._id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img className="h-20 w-20" src={data?.image} alt="" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {data?.title}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleCancelBookingEvent(data._id)}
                          className="border px-5 hover:text-red-400"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookedEvents;
