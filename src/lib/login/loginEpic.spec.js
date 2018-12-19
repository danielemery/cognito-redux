import test from 'ava';

import { TestScheduler } from 'rxjs/testing';

import * as loginActions from './loginActions';
import loginEpic from './loginEpic';

test('valid login action should cause loginSucceeded side effect', t => {
  const testScheduler = new TestScheduler((actual, expected) => {
    t.deepEqual(actual, expected);
  });

  testScheduler.run(helpers => {
    const { hot, expectObservable } = helpers;

    const groups = [];
    const userDetails = {
      EmailAddress: 'danielremery@gmail.com',
      FirstName: 'Daniel',
      Groups: groups,
      LastName: 'Emery'
    };

    const action$ = hot('-a', {
      a: loginActions.login({
        EmailAddress: 'danielremery@gmail.com',
        Password: 'verySecure'
      })
    });
    const state$ = null;
    const dependencies = {
      login: () => new Promise(resolve => resolve(userDetails))
    };

    const output$ = loginEpic(action$, state$, dependencies);

    expectObservable(output$).toBe('---a', {
      a: loginActions.loginSucceeded(userDetails)
    });
  });
});
