import { FormControl } from "@angular/forms"

export interface CreateUserStepOne{
  email: FormControl<string | null>
  username: FormControl<string | null>
  sex: FormControl<"H" | "F" | null>
}
