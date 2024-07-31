import { IngredientsService } from './../shared/services/ingredients.service';
import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { InputComponent } from '../shared/input/input.component';
import { CheckboxComponent } from "../shared/checkbox/checkbox.component";
import { ButtonComponent } from "../shared/button/button.component";
import { MiniSearchComponent } from "../shared/mini-search/mini-search.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { CreateUserSignup } from './CreateUserSignup.type';
import { CastToFormcontrolPipe } from '../shared/cast-to-formcontrol/cast-to-formcontrol.pipe';
import { NgFor, NgIf } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    MiniSearchComponent,
    NgFor,
    NgIf,
    ReactiveFormsModule,
    CastToFormcontrolPipe
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  constructor(
    private signupService:SignupService,
    private formBuilder:FormBuilder,
    private ingredientsService:IngredientsService
  ){ }

  createUserSignupFormGroup = this.formBuilder.group<CreateUserSignup>({
    email:"",
    firstname:"",
    lastname:"",
    password:"",
    sex:"H",
    username:""
  })
  choosedAllergies:string[] = []
  choosedPreferences:string[] = []
  allergies:string[] = []
  preferences:string[] = []
  handleChooseAllergie(name:string){
    const index = this.choosedAllergies.findIndex((value) => value = name)
    if(index < 0){
      this.choosedAllergies.push(name)
    }else{
      this.choosedAllergies.splice(index, 0)
    }
  }
  handleChoosePreference(name:string){
    const index = this.choosedPreferences.findIndex((value) => value = name)
    if(index < 0){
      this.choosedPreferences.push(name)
    }else{
      this.choosedPreferences.splice(index, 0)
    }
  }



  ngOnInit(): void {
    const ingredientsObservable = this.ingredientsService.getAllIngredients()
    ingredientsObservable
      .pipe(
        catchError(err =>{
          console.log("I think it's a bad API link erro")
          return [];
        })
      )
      .subscribe((ingredient) => {
        this.allergies = ingredient;
        this.preferences = ingredient;
      });
  }

  handleSubmit(){
    this.signupService.signup({...this.choosedAllergies, ...this.choosedPreferences,...this.createUserSignupFormGroup.value} as CreateUserSignup);
  }
}
