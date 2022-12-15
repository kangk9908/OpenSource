// creating interface as a schema for User object
// source: "Create Firebase Authentication Service" from https://www.positronx.io/full-angular-firebase-authentication-system/

import { Timestamp } from "rxjs"

export interface User {
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  emailVerified: boolean,
  // major: string,
  // gradDate: Timestamp<string>
}
