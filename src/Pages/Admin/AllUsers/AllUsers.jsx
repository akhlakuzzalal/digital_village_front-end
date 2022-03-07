import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosInterceptor from '../../../hooks/useAxiosInterceptor';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const axiosInterceptor = useAxiosInterceptor();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosInterceptor.get('/user/all', {
          signal: controller.signal,
        });
        console.log(response?.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.log(error.message);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleChangeRoleOfUser = (data) => {
    console.log(data);
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="w-5/6 md:w-2/3 space-y-6 text-center px-2 md:px-0 bg-primary">
        <p className="text-6xl font-semibold text-white -mt-8">
          Update a user role
        </p>
        <form onSubmit={handleSubmit(handleChangeRoleOfUser)}>
          {/* email */}
          <div className="mb-6">
            <input
              type="email"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Enter new admin Email"
              {...register('email', {
                required: 'this field is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
            />

            {errors.email && (
              <p className="text-error mb-2">{errors.email.message}</p>
            )}
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="btn w-[222px] bg-primary mx-auto md:w-72 py-2"
          >
            Change
          </button>
        </form>

        <h3>Available user</h3>
        {/* show all user here */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
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
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={user._id} className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {i}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user?.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user?.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user?.role || 'No role'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
