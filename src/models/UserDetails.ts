/**
 * Details of a logged in Cognito user.
 */
export default class UserDetails {
  constructor(
    FirstName: string,
    LastName: string,
    EmailAddress: string,
    Groups: Array<string>
  ) {
    this.FirstName = FirstName
    this.LastName = LastName
    this.EmailAddress = EmailAddress
    this.Groups = Groups
  }

  /** The first name of the user. */
  FirstName: string
  /** The last name of the user. */
  LastName: string
  /** The email address of the user. */
  EmailAddress: string
  /** The cognito groups the user belongs to. */
  Groups: Array<string>
}
