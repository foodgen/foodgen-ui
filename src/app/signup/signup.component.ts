import { CookiesService } from './../shared/services/cookies.service';
import { IngredientsService } from './../shared/services/ingredients.service';
import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { ButtonComponent } from '../shared/button/button.component';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { StepOneComponent } from "./step-one/step-one.component";
import { StepThreeComponent } from "./step-three/step-three.component";
import { StepTwoComponent } from "./step-two/step-two.component";
import { RouterModule } from '@angular/router';
import { CreateUserSignupFormGroup } from './CreateUserSignupFormGroup.type';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    NgIf,
    StepOneComponent,
    StepThreeComponent,
    StepTwoComponent,
    RouterModule,
],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  createUserSignupFormGroup: FormGroup;
  choosedAllergies: string[] = [];
  choosedPreferences: string[] = [];
  allergies: string[] = [];
  preferences: string[] = [];
  step = 0
  // signupDone : boolean = false;

  handleSubmit(){
    this.signupService.signup(
      {
        allergies: this.choosedAllergies,
        preferences: this.choosedPreferences,
        ...this.createUserSignupFormGroup.value
      }
    ).pipe(
      catchError(()=>{
        return ""
      })
    ).subscribe(token => {
      this.cookiesService.setCookie(token)
    })
  }
  handleChoosePreference(name: string) {
    const index = this.choosedPreferences.findIndex((value) => (value === name));
    if (index < 0) {
      this.choosedPreferences.push(name);
    } else {
      this.choosedPreferences.splice(index, 1);
    }
  }

  handleChooseAllergie(name: string) {
    const index = this.choosedAllergies.findIndex((value) => (value === name));
    if (index < 0) {
      this.choosedAllergies.push(name);
    } else {
      this.choosedAllergies.splice(index, 1);
    }
  }

  handleNext(){
    if(this.step === 2){
      return;
    }
    this.step += 1
  }

  handleReturn(){
    if(this.step === 0){
      return;
    }
    this.step -= 1
  }

  ngOnInit(): void {
    console.log(this.step)
    const ingredientsObservable = this.ingredientsService.getAllIngredients();
    ingredientsObservable
      .pipe(
        catchError((err) => {
          console.log("I think it's a bad API link erro");
          return [];
        })
      )
      .subscribe((ingredient) => {
        this.allergies = ingredient;
        this.preferences = ingredient;
      });
  }

  constructor(
    private signupService: SignupService,
    private formBuilder: FormBuilder,
    private ingredientsService: IngredientsService,
    private cookiesService:CookiesService
  ) {
    this.createUserSignupFormGroup = this.formBuilder.group<CreateUserSignupFormGroup>({
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      sex: 'H',
      username: '',
    });
  }
}

export enum Steps{
  stepOne, stepTwo, stepThree
}
