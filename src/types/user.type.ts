export default interface IUser {
  id?: any | null,
  fist_name?: string | null,
  last_name?: string | null,
  email?: string,
  password?: string,
  role?: Array<string>
}