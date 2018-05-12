import actionCreatorFactory, { Action, AnyAction } from 'typescript-fsa'

import LoginDetails from '../models/LoginDetails'
import UserDetails from '../models/UserDetails'

const actionCreator = actionCreatorFactory()

// Login Actions
export const login = actionCreator<LoginDetails>('LOGIN')
export const loginSucceeded = actionCreator<UserDetails>('LOGIN_SUCCEEDED')
export const loginFailed = actionCreator<{
  error: string
}>('LOGIN_FAILED')

// Logout Actions
export const logout = actionCreator('LOGOUT')
export const logoutSucceeded = actionCreator('LOGOUT_SUCCEEDED')
export const logoutFailed = actionCreator<{
  error: string
}>('LOGOUT_FAILED')

// Login Restore Actions
export const loginRestored = actionCreator<UserDetails>('LOGIN_RESTORED')
