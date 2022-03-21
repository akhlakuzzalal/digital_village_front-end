import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const PrivateRoute = () => {
  const { isLoading } = useFirebase();
  const user = useSelector((state) => state.user.user);

  const location = useLocation();

  if (isLoading) {
    return <p className="mt-[88px]">...Loading</p>;
  }

  return user?.email && !isLoading ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
