import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { InputComponent } from '../shared/input/input.component';
import { CheckboxComponent } from "../shared/checkbox/checkbox.component";
import { ButtonComponent } from "../shared/button/button.component";
import { MiniSearchComponent } from "../shared/mini-search/mini-search.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputComponent, CheckboxComponent, ButtonComponent, MiniSearchComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private signupService : SignupService;
  constructor(signupService:SignupService){
    this.signupService = signupService
  }

  handleSubmit(){
    this.signupService.signup();
  }
}
