import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import axios from '../../../../../../../api/axios';

const StatusCheck = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user.email;
  useEffect(() => {
    axios.get(`/vaccine/findAllInfo`).then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  }, []);
  const handleStatus = (userEmail) => {
    console.log(userEmail);
    axios
      .put('/vaccine/updateInfo', userEmail)

      .then((response) => {
        console.log(response.data);
        swal({
          title: 'Make sure all the information  valid.Want to proceed?',
          // text: 'Once deleted, you will not be able to recover this imaginary file!',
          icon: 'warning',

          buttons: true,
        }).then((willConfirm) => {
          if (willConfirm) {
            console.log('ok');
            swal('Registration Done.', {
              icon: 'success',
            });
          }
        });
      });
  };
  return (
    <div class="bg-gray-50 min-h-screen">
      <div>
        <div class="p-4">
          <div class="bg-white p-4 rounded-md">
            <div>
              <h2 class="mb-4 text-xl font-bold text-gray-700">
                Approve application
              </h2>
              <div>
                <div>
                  <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                    <div>
                      <span>Name</span>
                    </div>
                    <div>
                      <span>Email</span>
                    </div>

                    <div>
                      <span>Edit</span>
                    </div>
                  </div>
                  <div>
                    {info.map((row) => (
                      <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                        <div class="px-2 flex">
                          <span>{row.name}</span>
                        </div>
                        <div>
                          <span>{row.email}</span>
                        </div>

                        <div class="px-2">
                          <button
                            className="border-2 g bg-blue-900  text-white py-2 px-5"
                            onClick={() => handleStatus(row.email)}
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCheck;
