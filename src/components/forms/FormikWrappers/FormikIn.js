/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import { useQuery, useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { isValid } from 'date-fns';
import SignIn from '../SignIn';
import {
  validationIN,
  IS_SIGN_IN,
  SET_SIGNIN_ERROR,
  SET_AUTH_USER_DATA,
  runPOSTuser,
  baseURL,
  initSignInvalue,
  notes,
} from '../formsReceiver';

const FormikIn = () => {
  const dispatch = useDispatch();
  const MIN_ARR_LENGTH = 1;
  const navToNotes = useNavigate();

  const { isLoading, error, data, isFetching } = useQuery(
    'GetUsersForAuth',
    () => fetch(baseURL).then((res) => res.json())
  );

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: validationIN,
    onSubmit: (values) => {
      const existUser = data.filter(
        (users) =>
          users.email === values.email && users.password === values.password
      );
      if (existUser.length < MIN_ARR_LENGTH) {
        dispatch(SET_SIGNIN_ERROR(true));
        dispatch(IS_SIGN_IN(false));
        dispatch(SET_AUTH_USER_DATA([]));
      }
      if (existUser.length === MIN_ARR_LENGTH) {
        dispatch(SET_SIGNIN_ERROR(false));
        dispatch(IS_SIGN_IN(true));
        dispatch(SET_AUTH_USER_DATA(existUser));
        navToNotes(notes);
      }
    },
  });

  return (
    <>
      <Container>
        <SignIn
          formik={formik}
          error={error}
          isLoading={isLoading}
          isFetching={isFetching}
          querryData={data}
        />
      </Container>
    </>
  );
};

export default FormikIn;
