import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ allowedRoles }) => {
  const { roles } = useAuth();

  const user = useSelector((state) => state.user.user);

  const location = useLocation();

  const rolesArray = roles.map((role) => Object.values(role)).flat();

  return rolesArray?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : user?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
