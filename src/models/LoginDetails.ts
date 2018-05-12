/**
 * Details that need to be provided to Cognito to sign in a user.
 */
export default class LoginDetails {
  /** The email address the user used to sign up with. */
  EmailAddress: string
  /** The user's current password. */
  Password: string

  constructor(EmailAddress: string, Password: string) {
    this.EmailAddress = EmailAddress
    this.Password = Password
  }
}
