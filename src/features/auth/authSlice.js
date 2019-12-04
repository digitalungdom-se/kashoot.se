// disable some eslint since we assign state values directly, for example "state.authorizing = true"
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import betterFetch from 'utils/betterFetch';

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
 * @returns {object} {
 *  type: 'success' | 'fail',
 *  // success
 *  response: {
 *    _id: string,
 *    name: string,
 *    username: string,
 *    email: string,
 *  }
 *  // fail
 *  errors: [{
 *    msg: string,  // error
 *    param: string // field
 *  }, ...]
 * }
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
 * @returns {object} {
 *  type: 'success' | 'fail',
 *  // success
 *  response: {
 *    _id: string,
 *    name: string,
 *    username: string,
 *    email: string,
 *  }
 *  // fail
 *  errors: [{
 *    msg: string,  // error
 *    param: string // field
 *  }, ...]
 * }
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
 * @returns {object} {
 *  type: 'success' | 'fail',
 *  // fail
 *  errors: [{
 *    msg: string,  // error
 *    param: string // field
 *  }, ...]
 * }
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
