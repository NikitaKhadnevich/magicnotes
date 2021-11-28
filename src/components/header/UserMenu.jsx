/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box } from '@material-ui/core';
import {
  notes,
  sharedNotes,
  about,
  isSignIn,
  userData,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
} from './headerReceiver';

import { UserBox, NavLink } from './styled';

const UserMenu = () => {
  const userIsSignIn = useSelector(isSignIn);
  const getUserData = useSelector(userData);
  const dispatch = useDispatch();

  const SignOut = () => {
    dispatch(SET_AUTH_USER_DATA([]));
    dispatch(IS_SIGN_IN(false));
    dispatch(IS_SIGN_UP(false));
  };

  return (
    <>
      {userIsSignIn && getUserData && (
        <UserBox>
          {getUserData.map((userInfo) => (
            <Box>
              <Typography variant='body2'>Hello</Typography>
              <Typography variant='body2'>
                {userInfo.firstName} {userInfo.lastName}
              </Typography>
            </Box>
          ))}
          <NavLink to={about} data-path={about} onClick={SignOut}>
            <Typography variant='body2'>Sign Out</Typography>
          </NavLink>
        </UserBox>
      )}
    </>
  );
};
export default UserMenu;
