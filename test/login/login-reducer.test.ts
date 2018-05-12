import reducer from '../../src/login/login-reducer'
import {
  login,
  loginSucceeded,
  loginFailed,
  loginRestored,
  logout,
  logoutFailed,
  logoutSucceeded,
  LoginStatus
} from '../../src/cognito-redux'

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {
        type: 'INIT'
      })
    ).toEqual({
      loginStatus: LoginStatus.UNAUTHENTICATED,
      loginError: ''
    })
  })

  it('should transition to logging in on login', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.UNAUTHENTICATED,
          loginError: ''
        },
        login({
          EmailAddress: 'email@domain.com',
          Password: 'p@ssWord'
        })
      )
    ).toEqual({
      loginStatus: LoginStatus.LOGGING_IN,
      loginError: ''
    })
  })

  it('should transition to logged in on login success', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.LOGGING_IN,
          loginError: ''
        },
        loginSucceeded({
          EmailAddress: 'email@domain.com',
          FirstName: 'Joe',
          LastName: 'Blogs',
          Groups: ['admin']
        })
      )
    ).toEqual({
      loginStatus: LoginStatus.LOGGED_IN,
      loginError: ''
    })
  })

  it('should have error and transition to logged out on login failure', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.LOGGING_IN,
          loginError: ''
        },
        loginFailed({
          error: 'Login failed'
        })
      )
    ).toEqual({
      loginStatus: LoginStatus.UNAUTHENTICATED,
      loginError: 'Login failed'
    })
  })

  it('should transition to logging out on logout', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.LOGGED_IN,
          loginError: ''
        },
        logout()
      )
    ).toEqual({
      loginStatus: LoginStatus.LOGGING_OUT,
      loginError: ''
    })
  })

  it('should transition to unauthenticated on logout succeeded', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.LOGGING_OUT,
          loginError: ''
        },
        logoutSucceeded()
      )
    ).toEqual({
      loginStatus: LoginStatus.UNAUTHENTICATED,
      loginError: ''
    })
  })

  it('should show error and transition to logged in on logout failed', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.LOGGING_OUT,
          loginError: ''
        },
        logoutFailed({
          error: 'Logout failed'
        })
      )
    ).toEqual({
      loginStatus: LoginStatus.LOGGED_IN,
      loginError: 'Logout failed'
    })
  })

  it('should transition to logged in on login restored', () => {
    expect(
      reducer(
        {
          loginStatus: LoginStatus.UNAUTHENTICATED,
          loginError: ''
        },
        loginRestored({
          EmailAddress: 'email@domain.com',
          FirstName: 'Joe',
          LastName: 'Blogs',
          Groups: ['admin']
        })
      )
    ).toEqual({
      loginStatus: LoginStatus.LOGGED_IN,
      loginError: ''
    })
  })
})
