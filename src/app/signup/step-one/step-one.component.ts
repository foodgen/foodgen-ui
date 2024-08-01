import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateUserSignup } from '../CreateUserSignup.type';
import { InputComponent } from '../../shared/input/input.component';
import { CastToFormcontrolPipe } from '../../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [InputComponent, CastToFormcontrolPipe, ReactiveFormsModule],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css'
})
export class StepOneComponent {
  @Input("step-one-createUserSignupFormGroupe")
  createUserSignupFormGroup!: FormGroup;
}
