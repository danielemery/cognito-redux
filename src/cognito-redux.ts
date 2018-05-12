import { combineReducers, AnyAction } from 'redux'
import login from './login/login-reducer'
import { LoginState } from './login/login-state'

// Models
export {
  default as CompleteSignUpDetails
} from './models/CompleteSignUpDetails'
export { default as LoginDetails } from './models/LoginDetails'
export { default as SignUpDetails } from './models/SignUpDetails'
export { default as UserDetails } from './models/UserDetails'

// Login Actions
export * from './login/login-actions'
export { LoginStatus } from './login/login-state'

// Reducer
export const reducer = combineReducers({
  login
})
