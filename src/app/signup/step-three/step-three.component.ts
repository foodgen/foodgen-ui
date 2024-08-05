import { Component, Input } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { CastToFormcontrolPipe } from '../../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Steps } from '../signup.component';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [
    InputComponent,
    CastToFormcontrolPipe,
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.css'
})
export class StepThreeComponent {
  @Input("step-three-createUserSignupFormGroup")
  createUserSignupFormGroup?: FormGroup;
  @Input("step-three-showed")
  showed: number = 0;
}
