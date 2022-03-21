import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const AdminRoute = ({ allowedRoles }) => {
  const { isLoading } = useFirebase();
  const roles = useSelector((state) => state.user.roles);
  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  if (isLoading) {
    return <p>...Loading</p>;
  }

  const rolesArray = roles
    ? roles.map((role) => Object.values(role)).flat()
    : [];

  return rolesArray?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AdminRoute;
