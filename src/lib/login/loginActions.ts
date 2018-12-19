import { createStandardAction } from 'typesafe-actions';

import LoginDetails from '../../models/login-details';
import UserDetails from '../../models/user-details';

export const login = createStandardAction('LOGIN')<LoginDetails>();
export const loginSucceeded = createStandardAction('LOGIN_SUCCEEDED')<
  UserDetails
>();
export const loginFailed = createStandardAction('LOGIN_FAILED')<{
  readonly error: string;
}>();

export const logout = createStandardAction('LOGOUT')();
export const logoutSucceeded = createStandardAction('LOGOUT_SUCCEEDED')();
export const logoutFailed = createStandardAction('LOGOUT_FAILED')<{
  readonly error: string;
}>();

export const loginRestored = createStandardAction('LOGIN_RESTORED')<
  UserDetails
>();

export const init = createStandardAction('INIT')();
