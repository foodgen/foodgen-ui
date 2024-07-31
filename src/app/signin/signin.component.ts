import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from './signin.service';
import { SigninUser } from './SigninUser.type';
import { InputComponent } from '../shared/input/input.component';
import { CastToFormcontrolPipe } from '../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, CastToFormcontrolPipe, ButtonComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private formBuilder:FormBuilder, private signinService:SigninService ){
  }
  userInput= this.formBuilder.group<SigninUser>({email:"",password:""})
  handleSubmit(event:Event){
    event.preventDefault()
    this.signinService.signin(this.userInput.value)
  }
}
