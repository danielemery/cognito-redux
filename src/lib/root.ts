import { combineReducers } from 'redux';
import loginReducer from './login/login';

export default combineReducers({
  login: loginReducer
});
