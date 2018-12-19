import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import loginReducer, { LoginAction, LoginState } from './login/login';
import LoginEpic from './login/loginEpic';
import LoginService from './login/loginService';

export default combineReducers({
  login: loginReducer
});

export const rootEpic = combineEpics(LoginEpic);

export type RootAction = LoginAction;

export type RootServices = LoginService;

export interface RootState {
  readonly login: LoginState;
}
