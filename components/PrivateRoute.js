// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
