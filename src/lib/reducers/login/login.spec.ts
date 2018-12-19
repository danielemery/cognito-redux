// tslint:disable:no-expression-statement
import test from 'ava';

import reducer from './login';
import { LoginStatus } from './loginState';

test('should return the initial state', t => {
  const expected = {
    loginError: undefined,
    loginStatus: LoginStatus.UNAUTHENTICATED
  };
  const actual = reducer(undefined, { type: 'INIT' });
  t.deepEqual(actual, expected);
});
