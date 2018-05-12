/**
 * Details that need to be provided to Cognito to sign up a new user.
 */
export default class SignUpDetails {
  /** The first name of the new user. */
  FirstName: string
  /** The last name of the new user. */
  LastName: string
  /** The email address of the new user. */
  EmailAddress: string
  /** A password for the new user. */
  Password: string

  constructor(
    FirstName: string,
    LastName: string,
    EmailAddress: string,
    Password: string
  ) {
    this.FirstName = FirstName
    this.LastName = LastName
    this.EmailAddress = EmailAddress
    this.Password = Password
  }
}
