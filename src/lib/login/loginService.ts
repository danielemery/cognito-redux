import LoginDetails from '../models/login-details';
import UserDetails from '../models/user-details';

export default interface LoginService {
  readonly login: (loginDetails: LoginDetails) => Promise<UserDetails>;
}
