import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from './signin.service';
import { SigninUser } from '../@types/SigninUser.type';
import { InputComponent } from '../shared/input/input.component';
import { CastToFormcontrolPipe } from '../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { ButtonComponent } from '../shared/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    CastToFormcontrolPipe,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private formBuilder:FormBuilder, private signinService:SigninService ){
  }
  userInput= this.formBuilder.group<SigninUser>({email:"",password:""})
  handleSubmit(){
    this.signinService.signin(this.userInput.value)
  }
}
