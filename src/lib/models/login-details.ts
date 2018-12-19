/**
 * Details that need to be provided to Cognito to sign in a user.
 */
export default interface LoginDetails {
  /** The email address the user used to sign up with. */
  readonly EmailAddress: string;
  /** The user's current password. */
  readonly Password: string;
}
