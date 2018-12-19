/**
 * Details that need to be provided to Cognito to sign up a new user.
 */
export default interface SignUpDetails {
  /** The first name of the new user. */
  readonly FirstName: string;
  /** The last name of the new user. */
  readonly LastName: string;
  /** The email address of the new user. */
  readonly EmailAddress: string;
  /** A password for the new user. */
  readonly Password: string;
}
