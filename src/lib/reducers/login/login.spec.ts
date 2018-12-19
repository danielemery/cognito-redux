// tslint:disable:no-expression-statement
import test from 'ava';

import reducer from './login';
import {
  login,
  loginFailed,
  loginRestored,
  loginSucceeded,
  logout,
  logoutFailed,
  logoutSucceeded
} from './loginActions';
import { LoginStatus } from './loginState';

test('should return the initial state', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.UNAUTHENTICATED
  };
  const actual = reducer(undefined, { type: 'INIT' });
  t.deepEqual(actual, expected);
});

test('should transition to logging in on login', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.LOGGING_IN
  };
  const actual = reducer(
    {
      loginError: undefined,
      loginStatus: LoginStatus.UNAUTHENTICATED
    },
    login({
      EmailAddress: 'email@domain.com',
      Password: 'p@ssWord'
    })
  );
  t.deepEqual(actual, expected);
});

test('should transition to logged in on login success', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.LOGGED_IN
  };
  const groups: ReadonlyArray<string> = ['admin'];
  const actual = reducer(
    {
      loginError: '',
      loginStatus: LoginStatus.LOGGING_IN
    },
    loginSucceeded({
      EmailAddress: 'email@domain.com',
      FirstName: 'Joe',
      Groups: groups,
      LastName: 'Blogs'
    })
  );
  t.deepEqual(actual, expected);
});

test('should have error and transition to logged out on login failure', t => {
  const expected = {
    loginError: 'Login failed',
    loginStatus: LoginStatus.UNAUTHENTICATED
  };
  const actual = reducer(
    {
      loginError: '',
      loginStatus: LoginStatus.LOGGING_IN
    },
    loginFailed({
      error: 'Login failed'
    })
  );
  t.deepEqual(actual, expected);
});

test('should transition to logging out on logout', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.LOGGING_OUT
  };
  const actual = reducer(
    {
      loginError: undefined,
      loginStatus: LoginStatus.LOGGED_IN
    },
    logout()
  );
  t.deepEqual(actual, expected);
});

test('should transition to unauthenticated on logout succeeded', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.UNAUTHENTICATED
  };
  const actual = reducer(
    {
      loginError: undefined,
      loginStatus: LoginStatus.LOGGING_OUT
    },
    logoutSucceeded()
  );
  t.deepEqual(actual, expected);
});

test('should show error and transition to logged in on logout failed', t => {
  const expected = {
    loginError: 'Logout failed',
    loginStatus: LoginStatus.LOGGED_IN
  };
  const actual = reducer(
    {
      loginError: undefined,
      loginStatus: LoginStatus.LOGGING_OUT
    },
    logoutFailed({
      error: 'Logout failed'
    })
  );
  t.deepEqual(actual, expected);
});

test('should transition to logged in on login restored', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.LOGGED_IN
  };
  const groups: ReadonlyArray<string> = ['admin'];
  const actual = reducer(
    {
      loginError: undefined,
      loginStatus: LoginStatus.UNAUTHENTICATED
    },
    loginRestored({
      EmailAddress: 'email@domain.com',
      FirstName: 'Joe',
      Groups: groups,
      LastName: 'Blogs'
    })
  );
  t.deepEqual(actual, expected);
});
