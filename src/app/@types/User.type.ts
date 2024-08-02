import { CreateUserSignup } from "./CreateUserSignup.type";

export type User = {
  id:string
  role:unknown
} & CreateUserSignup
