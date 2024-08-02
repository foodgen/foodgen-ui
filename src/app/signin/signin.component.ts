import { CookiesService } from './../shared/services/cookies.service';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SigninService } from './signin.service';
import { SigninUser } from '../@types/SigninUser.type';
import { InputComponent } from '../shared/input/input.component';
import { CastToFormcontrolPipe } from '../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { ButtonComponent } from '../shared/button/button.component';
import { Router, RouterModule } from '@angular/router';
import { catchError } from 'rxjs';

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
  constructor(
    private formBuilder:FormBuilder,
    private signinService:SigninService,
    private router:Router,
    private cookesService:CookiesService
  ){
  }
  userInput= this.formBuilder.group<SigninUser>({email:"",password:""})
  handleSubmit(){
    const tokenObservablte = this.signinService.signin(this.userInput.value)
    tokenObservablte.pipe(
      catchError((err)=>{
        return "";
      })
    ).subscribe(token => {
      if(token.length === 0){
        this.router.navigateByUrl("/signin")
      }else{
        this.cookesService.setCookie(token)
        this.router.navigateByUrl("/random-meals")
      }
    })
  }
}
