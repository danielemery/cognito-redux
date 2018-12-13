import test from 'ava';

import reducer from './login';
import { LoginStatus } from './loginState';

test('should return the initial state', t => {
  t.deepEqual(reducer(undefined, { type: 'INIT' }), {
    loginStatus: LoginStatus.UNAUTHENTICATED,
    loginError: undefined
  });
});
