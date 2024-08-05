import { FormArray, FormControl } from "@angular/forms"

export interface CreateUserSignup{
  firstname: string
  lastname: string
  username: string
  email: string
  sex: "H" | "F"
  password: string
}
