import { LoginState, LoginStatus } from './login-state'
import * as Actions from './login-actions'
import { isType } from 'typescript-fsa'
import { Action } from 'redux'

const reducer = (
  state: LoginState = {
    loginStatus: LoginStatus.UNAUTHENTICATED,
    loginError: ''
  },
  action: Action
): LoginState => {
  if (isType(action, Actions.login)) {
    return {
      ...state,
      loginStatus: LoginStatus.LOGGING_IN,
      loginError: ''
    }
  }

  if (isType(action, Actions.loginSucceeded)) {
    return {
      ...state,
      loginStatus: LoginStatus.LOGGED_IN,
      loginError: ''
    }
  }

  if (isType(action, Actions.loginFailed)) {
    return {
      ...state,
      loginStatus: LoginStatus.UNAUTHENTICATED,
      loginError: action.payload.error
    }
  }

  if (isType(action, Actions.loginRestored)) {
    return {
      ...state,
      loginStatus: LoginStatus.LOGGED_IN,
      loginError: ''
    }
  }

  if (isType(action, Actions.logout)) {
    return {
      ...state,
      loginStatus: LoginStatus.LOGGING_OUT
    }
  }

  if (isType(action, Actions.logoutFailed)) {
    return {
      ...state,
      loginStatus: LoginStatus.LOGGED_IN,
      loginError: action.payload.error
    }
  }

  if (isType(action, Actions.logoutSucceeded)) {
    return {
      ...state,
      loginStatus: LoginStatus.UNAUTHENTICATED,
      loginError: ''
    }
  }

  return state
}

export default reducer
