export interface User{
  id : number,
  name: string,
  username: string,
  password ?: string,
  designation: string,
  roleId: number,
  roleName ?: string
}
