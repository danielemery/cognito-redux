import { ActionType, getType } from 'typesafe-actions';

import * as actions from './loginActions';

export type LoginAction = ActionType<typeof actions>;

export enum LoginStatus {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  LOGGING_IN = 'LOGGING_IN',
  LOGGED_IN = 'LOGGED_IN',
  LOGGING_OUT = 'LOGOUT_LOADING'
}

export interface LoginState {
  readonly loginStatus: LoginStatus;
  readonly loginError: string | undefined;
}

export default (
  state: LoginState = {
    loginError: undefined,
    loginStatus: LoginStatus.UNAUTHENTICATED
  },
  action: LoginAction
) => {
  switch (action.type) {
    case getType(actions.login):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.LOGGING_IN
      };
    case getType(actions.loginSucceeded):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.LOGGED_IN
      };
    case getType(actions.loginFailed):
      return {
        ...state,
        loginError: action.payload.error,
        loginStatus: LoginStatus.UNAUTHENTICATED
      };
    case getType(actions.loginRestored):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.LOGGED_IN
      };
    case getType(actions.logout):
      return {
        ...state,
        loginStatus: LoginStatus.LOGGING_OUT
      };
    case getType(actions.logoutSucceeded):
      return {
        ...state,
        loginError: undefined,
        loginStatus: LoginStatus.UNAUTHENTICATED
      };
    case getType(actions.logoutFailed):
      return {
        ...state,
        loginError: action.payload.error,
        loginStatus: LoginStatus.LOGGED_IN
      };
    default:
      return state;
  }
};
