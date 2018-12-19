/**
 * Details of a logged in Cognito user.
 */
export default interface UserDetails {
  /** The first name of the user. */
  readonly FirstName: string;
  /** The last name of the user. */
  readonly LastName: string;
  /** The email address of the user. */
  readonly EmailAddress: string;
  /** The cognito groups the user belongs to. */
  readonly Groups: [string];
}
