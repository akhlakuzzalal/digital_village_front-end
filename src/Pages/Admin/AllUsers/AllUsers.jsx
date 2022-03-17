import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URI } from '../../../api/axios';
import useAxiosInterceptor from '../../../hooks/useAxiosInterceptor';
import { getAllUsers } from '../../../redux/slices/user/userSlice';

const AllUsers = () => {
  const allUsers = useSelector((state) => state.user.allUsers);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const axiosInterceptor = useAxiosInterceptor();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // let isMounted = true;
    // const controller = new AbortController();

    // const getUsers = async () => {
    //   try {
    //     const response = await axiosInterceptor.get('/user/all', {
    //       signal: controller.signal,
    //     });
    //     console.log(response?.data);
    //     isMounted && setUsers(response.data);
    //   } catch (error) {
    //     console.log(error.message);
    //     navigate('/login', { state: { from: location }, replace: true });
    //   }
    // };
    // getUsers();
    // return () => {
    //   isMounted = false;
    //   controller.abort();
    // };
    dispatch(getAllUsers());
  }, []);

  const handleChangeRoleOfUser = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto overflow-y-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Roles
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user) => (
                <tr key={user._id} className="hover:bg-cyan-50">
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-16 h-16">
                        <img
                          className="w-full h-full rounded-full"
                          src={
                            user?.photo?.path
                              ? `${BASE_URI}/${user?.photo?.path}`
                              : 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
                          }
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {user?.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {user?.email}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Roles</p>
                  </td>
                  <td className="px-5 py-5 border-b max-w-[100px]">
                    <button className="p-4 bg-rose-600 text-white rounded-2xl">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
            <span className="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-400 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-400 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
