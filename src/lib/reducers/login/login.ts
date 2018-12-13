import { ActionType, getType } from 'typesafe-actions';

import * as login from '../../actions/login';
import { LoginState, LoginStatus } from './loginState';

export type LoginAction = ActionType<typeof login>;

export default (
  state: LoginState = {
    loginStatus: LoginStatus.UNAUTHENTICATED,
    loginError: undefined
  },
  action: LoginAction
) => {
  switch (action.type) {
    case getType(login.login):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGING_IN,
        loginError: undefined
      };
    case getType(login.loginSucceeded):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGED_IN,
        loginError: undefined
      };
    case getType(login.loginFailed):
      return {
        ...state,
        loginStatus: LoginStatus.UNAUTHENTICATED,
        loginError: action.payload.error
      };
    case getType(login.loginRestored):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGED_IN,
        loginError: undefined
      };
    case getType(login.logout):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGING_OUT
      };
    case getType(login.logoutSucceeded):
      return {
        ...state,
        loginStatus: LoginStatus.UNAUTHENTICATED,
        loginError: ''
      };
    case getType(login.logoutFailed):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGED_IN,
        loginError: action.payload.error
      };
    default:
      return state;
  }
};
