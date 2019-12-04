// disable some eslint since we assign state values directly, for example "state.authorizing = true"
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import betterFetch from 'utils/betterFetch';

/**
 * @typedef   {Object} Response
 * @property  {string}        type      - is either 'success' or 'fail'
 * @property  {Success}       response  - is only set on successful requests
 * @property  {Array.<Error>} errors    - is only set on erroneous requests
 */

/**
 * @typedef   {Object} Success
 * @property  {string} _id       - the users mongoID
 * @property  {string} name      - the name of the user, i.e. 'Douglas Bengtsson'
 * @property  {string} username
 * @property  {string} email
 */


/**
 * @typedef   {Object} Error
 * @property  {string} msg    - helpful message describing the error
 * @property  {string} param  - the unsuccessful field
 */

export const initialState = {
  authorizing: false,
  authorized: false,

  loginInError: null,

  loggingOut: false,
  logoutError: null,

  me: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.authorizing = true;
    },
    authSuccess(state, action) {
      state.me = action.payload.res.details;
      state.authorized = true;
      state.authorizing = true;
    },
    authFailure(state, action) {
      state.authorizing = false;
      state.authError = action.payload.err;
    },
    loginStart(state) {
      // clear any errors
      state.loginError = null;
      state.authorizing = true;
    },
    loginSuccess(state, action) {
      state.me = action.payload.res.me;
      state.authorizing = false;
    },
    loginFailure(state, action) {
      state.loginError = action.payload.err;
      state.authorizing = false;
    },
    logoutStart(state) {
      state.loggingOut = true;
      state.logoutError = null;
    },
    logoutSuccess(state) {
      state.loggingOut = false;
      state.me = null;
    },
    logoutFailure(state, action) {
      state.loggingOut = false;
      state.logoutError = action.payload.err;
    },
  },
});

export const { authStart, authSuccess, authFailure } = authSlice.actions;
/**
 * Authorize at kashoot
 * @param {string} url     api route
 * @param {string} cookie  should the function authorize with this cookie
 * @returns {Response}
 */
export function authorize(url = '/api/user/auth', cookie) {
  return (dispatch) => {
    dispatch(authStart());
    return betterFetch(url, cookie ? { headers: { cookie } } : undefined)
      .then((res) => dispatch(authSuccess({ res })))
      .catch((err) => dispatch(authFailure({ err })));
  };
}

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;
/**
 * Login to kashoot
 *
 * @param {string}  url        which url, defaults to /api/user/login
 * @param {string}  username   used username
 * @param {string}  password   password
 * @param {boolean} keepCookie should the function return the authentication cookie along
 *                              with the response, defaults to false
 * @returns {Response}
 */
export function login({
  username, password, keepCookie = false, url = '/api/user/login',
}) {
  return (dispatch) => {
    dispatch(loginStart());
    return betterFetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      keepCookie,
    })
      .then((res) => dispatch(loginSuccess({ res })))
      .catch((err) => dispatch(loginFailure({ err })));
  };
}

export const { logoutStart, logoutSuccess, logoutFailure } = authSlice.actions;
/**
 * Logout of kashoot
 * @returns {Response}
 */
export function logout(url = '/api/user/logout', cookie) {
  const options = {
    method: 'delete',
  };
  if (cookie) options.headers = { cookie };
  return (dispatch) => {
    dispatch(logoutStart());
    return betterFetch(url, options)
      .then((res) => dispatch(logoutSuccess({ res })))
      .catch((err) => dispatch(logoutFailure({ err })));
  };
}

export default authSlice.reducer;
