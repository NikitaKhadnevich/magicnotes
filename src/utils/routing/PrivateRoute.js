/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTERS, isSignIn } from './routingReceiver';

function PrivateRoute({ children }) {
  const isSignInApp = useSelector(isSignIn);
  const { signIn } = ROUTERS;

  if (!isSignInApp) {
    return <Navigate to={signIn} />;
  }
  return children;
}

export default PrivateRoute;
