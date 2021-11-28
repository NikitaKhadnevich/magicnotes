/* eslint-disable no-unused-vars */
import {
  isSignIn,
  userData,
  isSignUp,
  isSignUpError,
  isSignInError,
} from '../../api/signToolkit/signSelectors';
import ROUTERS from '../../config/routers/routers';
import {
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
} from '../../api/signToolkit/signToolkit';

const { notes, notFound, sharedNotes, about, signUp, signIn } = ROUTERS;

export {
  notes,
  notFound,
  sharedNotes,
  about,
  signUp,
  signIn,
  isSignIn,
  userData,
  SET_AUTH_USER_DATA,
  IS_SIGN_IN,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  SET_SIGNIN_ERROR,
  GET_SIGN_OUT,
  isSignInError,
};
