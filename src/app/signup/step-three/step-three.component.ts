import { Component, Input } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { CastToFormcontrolPipe } from '../../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [InputComponent, CastToFormcontrolPipe, ReactiveFormsModule],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.css'
})
export class StepThreeComponent {
  @Input("step-three-createUserSignupFormGroup")
  createUserSignupFormGroup!: FormGroup;
}
