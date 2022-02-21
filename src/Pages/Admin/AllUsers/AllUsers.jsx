import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosInterceptor from '../../../hooks/useAxiosInterceptor';
import useRefreshToken from '../../../hooks/useRefreshToken';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const refresh = useRefreshToken();

  const axiosInterceptor = useAxiosInterceptor();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    console.log(controller.signal);
    const getUsers = async () => {
      try {
        const response = await axiosInterceptor.get('/auth/allusers', {
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
  }, [axiosInterceptor]);

  return (
    <div className="mt-[88px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      List of all the users
      <ul>
        {users.map((user) => (
          <li key={user?.name}>{user?.name}</li>
        ))}
      </ul>
      <button className="btn bg-primary" onClick={() => refresh()}>
        Refresh
      </button>
    </div>
  );
};

export default AllUsers;
