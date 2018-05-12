import {
  CompleteSignUpDetails,
  LoginDetails,
  SignUpDetails,
  UserDetails
} from '../src/cognito-redux'

/**
 * Dummy test
 */
describe('Model test', () => {
  it('CompleteSignUpDetails can be constructed', () => {
    let details = new CompleteSignUpDetails('123', 'email@domain.com', false)
    expect(details).toBeInstanceOf(CompleteSignUpDetails)
    expect(details.Code).toEqual('123')
    expect(details.EmailAddress).toEqual('email@domain.com')
    expect(details.IsResume).toEqual(false)
  })

  it('LoginDetails can be constructed', () => {
    let details = new LoginDetails('email@domain.com', 'p@ssWord')
    expect(details).toBeInstanceOf(LoginDetails)
    expect(details.EmailAddress).toEqual('email@domain.com')
    expect(details.Password).toEqual('p@ssWord')
  })

  it('SignUpDetails can be constructed', () => {
    let details = new SignUpDetails(
      'Joe',
      'Blogs',
      'email@domain.com',
      'p@ssWord'
    )
    expect(details).toBeInstanceOf(SignUpDetails)
    expect(details.FirstName).toEqual('Joe')
    expect(details.LastName).toEqual('Blogs')
    expect(details.EmailAddress).toEqual('email@domain.com')
    expect(details.Password).toEqual('p@ssWord')
  })

  it('UserDetails can be constructed', () => {
    let groups = []
    let details = new UserDetails('Joe', 'Blogs', 'email@domain.com', groups)
    expect(details).toBeInstanceOf(UserDetails)
    expect(details.FirstName).toEqual('Joe')
    expect(details.LastName).toEqual('Blogs')
    expect(details.EmailAddress).toEqual('email@domain.com')
    expect(details.Groups).toEqual([])
  })
})
