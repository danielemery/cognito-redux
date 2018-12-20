import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import loginReducer, { LoginAction, LoginState } from './login/login';
import LoginEpic from './login/loginEpic';
import LoginService from './login/loginService';

export const authReducer = combineReducers({
  login: loginReducer
});

export const authEpic = combineEpics(LoginEpic);

export type RootAction = LoginAction;

export type RootServices = LoginService;

export interface RootState {
  readonly auth: {
    readonly login: LoginState;
  };
}
