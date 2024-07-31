import { Component } from '@angular/core';
import { StepOneService } from './step-one.service';
import { InputComponent } from '../../shared/input/input.component';
import { CheckboxComponent } from "../../shared/checkbox/checkbox.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { MiniSearchComponent } from "../../shared/mini-search/mini-search.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateUserStepOne } from './CreateUserStepOne.type';
import { CastToFormcontrolPipe } from '../../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    MiniSearchComponent,
    NgFor,
    ReactiveFormsModule,
    CastToFormcontrolPipe
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css'
})
export class StepOneComponent {
  private StepOneService : StepOneService;
  createUserStepOneFormGroup = new FormGroup<CreateUserStepOne>({
    email:new FormControl("", Validators.requiredTrue),
    sex:new FormControl(null,Validators.requiredTrue),
    username: new FormControl("")
  })

  constructor(StepOneService:StepOneService){
    console.log('initialized')
    this.StepOneService = StepOneService
  }
  allergies = [{
    id:"something",
    name:"allergie"
  }]
  handleSubmit(event:Event){
    event.preventDefault()
    const form = event.target
    console.log(form)
    this.StepOneService.signup();
  }
}
