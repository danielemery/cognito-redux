import { ActionType, getType } from 'typesafe-actions';

import * as login from './loginActions';
import { LoginState, LoginStatus } from './loginState';

export type LoginAction = ActionType<typeof login>;

export default (
  state: LoginState = {
    loginError: undefined,
    loginStatus: LoginStatus.UNAUTHENTICATED
  },
  action: LoginAction
) => {
  switch (action.type) {
    case getType(login.login):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.LOGGING_IN
      };
    case getType(login.loginSucceeded):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.LOGGED_IN
      };
    case getType(login.loginFailed):
      return {
        ...state,
        loginError: action.payload.error,
        loginStatus: LoginStatus.UNAUTHENTICATED
      };
    case getType(login.loginRestored):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.LOGGED_IN
      };
    case getType(login.logout):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGING_OUT
      };
    case getType(login.logoutSucceeded):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.UNAUTHENTICATED
      };
    case getType(login.logoutFailed):
      return {
        ...state,
        loginError: action.payload.error,
        loginStatus: LoginStatus.LOGGED_IN
      };
    default:
      return state;
  }
};
