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
import SignUp from '../SignUp';
import {
  validationSchema,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
  ERROR_MESSAGES,
  runPOSTuser,
  baseURL,
  initSignUpvalue,
  signIn,
  signUp,
} from '../formsReceiver';

const FormikUp = () => {
  const dispatch = useDispatch();
  const { hasAlready } = ERROR_MESSAGES;
  const MIN_ARR_LENGTH = 1;
  const navToAuth = useNavigate();
  const [isFetch, setFetch] = useState(true);

  const { isLoading, error, data, isFetching } = useQuery('GetUsers', () =>
    fetch(baseURL).then((res) => res.json())
  );
  const { mutateAsync } = useMutation(
    (formdata) => runPOSTuser(baseURL, formdata),
    {
      onSuccess: () => {
        navToAuth(signIn);
        dispatch(IS_SIGN_UP(true));
      },
    }
  );

  const formik = useFormik({
    initialValues: initSignUpvalue,
    validationSchema,
    onSubmit: (values, actions) => {
      const existUser = data.filter((users) => users.email === values.email);
      if (existUser.length === MIN_ARR_LENGTH) {
        dispatch(SET_SIGNUP_ERROR(true));
      }
      if (existUser.length < MIN_ARR_LENGTH) {
        dispatch(SET_SIGNUP_ERROR(false));
        mutateAsync(values);
        actions.resetForm(); // Нужно чекать на success ибо будут траблы с сайнапом
      }
    },
  });

  return (
    <>
      <Container>
        <SignUp
          formik={formik}
          hasAlready={hasAlready}
          setFetch={setFetch}
          error={error}
          isLoading={isLoading}
          isFetching={isFetching}
          querryData={data}
        />
      </Container>
    </>
  );
};

export default FormikUp;
