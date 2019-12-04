import { getDefaultMiddleware } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';

import {
  // initial state of auth
  initialState,
  // auth actions
  authorize,
  authSuccess,
  authFailure,
  // login actions
  login,
  loginSuccess,
  loginFailure,
  // logout actions
  logout,
  logoutSuccess,
  logoutFailure,
} from './authSlice';

const mockStore = configureMockStore(getDefaultMiddleware());

let cookie;

const authResponse = {
  type: 'success',
  details: {
    _id: expect.any(String),
    name: expect.any(String),
    username: expect.any(String),
    email: expect.any(String),
  },
};

describe('login API calls', () => {
  it('should handle correct login', () => {
    const store = mockStore(initialState);
    return store.dispatch(login(
      { username: 'admin', password: 'PasSwOrd', keepCookie: true },
    )).then((res) => {
      cookie = res.payload.res.setCookies;
      expect(store.getActions()[1]).toMatchObject({
        type: loginSuccess.type,
        payload: {
          res: authResponse,
        },
      });
    });
  });

  it('should handle incorrect password login', () => {
    const store = mockStore(initialState);
    return store.dispatch(login(
      { username: 'Nautman', password: 'password' },
    )).then(() => {
      expect(store.getActions()[1]).toMatchObject({
        type: loginFailure.type,
        payload: {
          err: {
            type: 'fail',
            errors: [{
              msg: 'incorrect password',
              param: 'password',
            }],
          },
        },
      });
    });
  });

  it('should handle unknown username', () => {
    const store = mockStore(initialState);
    return store.dispatch(login(
      { username: '@', password: 'password' },
    )).then(() => {
      expect(store.getActions()[1]).toMatchObject({
        type: loginFailure.type,
        payload: {
          err: {
            type: 'fail',
            errors: [{
              msg: 'no account',
              param: 'username',
            }],
          },
        },
      });
    });
  });
});

describe('auth API calls', () => {
  it('should handle fail when unauthorized', () => {
    const store = mockStore(initialState);
    return store.dispatch(authorize()).then(() => {
      expect(store.getActions()[1]).toHaveProperty('type', authFailure.type);
      expect(store.getActions()[1]).toHaveProperty('payload.err.type', 'fail');
    });
  });

  it('should handle success when authorized with cookie', () => {
    const store = mockStore(initialState);
    return store.dispatch(authorize(cookie)).then(() => {
      expect(store.getActions()[1]).toMatchObject({
        type: authSuccess.type,
        payload: {
          res: authResponse,
        },
      });
    });
  });
});

describe('logout API calls', () => {
  it('should fail logout when unauthorized', () => {
    const store = mockStore(initialState);
    return store.dispatch(logout()).then(() => {
      expect(store.getActions()[1]).toMatchObject({
        type: logoutFailure.type,
        payload: {
          err: {
            type: 'fail',
            msg: 'Unauthorised',
          },
        },
      });
    });
  });

  it('should successfully logout authorized', () => {
    const store = mockStore(initialState);
    return store.dispatch(logout(cookie)).then(() => {
      expect(store.getActions()[1]).toMatchObject({
        type: logoutSuccess.type,
        payload: {
          res: {
            type: 'success',
          },
        },
      });
    });
  });
});
