import { combineEpics, Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';

// tslint:disable:no-submodule-imports
import { from, of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
// tslint:enable:no-submodule-imports

import { RootAction, RootServices, RootState } from '../root';
import * as loginActions from './loginActions';

const loginEpic: Epic<RootAction, RootAction, RootState, RootServices> = (
  action$,
  {},
  { login }
) =>
  action$.pipe(
    filter(isActionOf(loginActions.login)),
    mergeMap(action =>
      from(login(action.payload)).pipe(
        map(userDetails => loginActions.loginSucceeded(userDetails)),
        catchError(e => of(loginActions.loginFailed({ error: e })))
      )
    )
  );

export default combineEpics(loginEpic);
