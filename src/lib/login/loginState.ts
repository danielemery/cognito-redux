export enum LoginStatus {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  LOGGING_IN = 'LOGGING_IN',
  LOGGED_IN = 'LOGGED_IN',
  LOGGING_OUT = 'LOGOUT_LOADING'
}

export interface LoginState {
  readonly loginStatus: LoginStatus;
  readonly loginError: string | undefined;
}
