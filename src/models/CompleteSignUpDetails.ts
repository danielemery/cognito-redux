/**
 * The details that need to be provided to cognito to complete a user sign up.
 */
export default class CompleteSignOffDetails {
  /** The verification code sent to the user by email or SMS. */
  Code: string
  /** The email address the user is signing up with. */
  EmailAddress: string
  /** Whether or not the user is completing a previously started sign up. */
  IsResume: boolean

  constructor(Code: string, EmailAddress: string, IsResume: boolean) {
    this.Code = Code
    this.EmailAddress = EmailAddress
    this.IsResume = IsResume
  }
}
