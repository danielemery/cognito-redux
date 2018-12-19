/**
 * The details that need to be provided to cognito to complete a user sign up.
 */
export default interface CompleteSignOffDetails {
  /** The verification code sent to the user by email or SMS. */
  readonly Code: string;
  /** The email address the user is signing up with. */
  readonly EmailAddress: string;
  /** Whether or not the user is completing a previously started sign up. */
  readonly IsResume: boolean;
}
