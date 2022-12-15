// creating interface as a schema for User object
// source: "Create Firebase Authentication Service" from https://www.positronx.io/full-angular-firebase-authentication-system/

export interface User {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  emailVerified: boolean,
}
