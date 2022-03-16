import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../../../../../api/axios';

const StatusCheck = () => {
  const user = useSelector((state) => state.user.user);
  const [info, setInfo] = useState([]);
  const email = user.email;
  useEffect(() => {
    axios.get(`/vaccine/findInfo?email=${email}`).then((response) => {
      setInfo(response.data[0]);
      console.log(response.data[0]);
    });
  }, []);
  const handleStatus = () => {
    const userEmail = info.email;
    fetch('http://localhost:5000/vaccine/updateInfo', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
                      <span>View</span>
                    </div>

                    <div>
                      <span>Edit</span>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                      <div class="px-2 flex">
                        <span>{info.name}</span>
                      </div>
                      <div>
                        <span>{info.email}</span>
                      </div>
                      <div class="px-2">
                        <Link to="#">
                          <button className="border-2 g bg-blue-900  text-white py-2 px-5">
                            See the details
                          </button>
                        </Link>
                      </div>

                      <div class="px-2">
                        <button
                          className="border-2 g bg-blue-900  text-white py-2 px-5"
                          onClick={handleStatus}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
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
