export enum Roles {
  Admin,
  User
}

export type UserDTOIn = {
  name: string,
  email: string,
  password: string,
  role: Roles
}
