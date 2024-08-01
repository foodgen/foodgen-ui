import { CreateUserSignup } from '../@types/CreateUserSignup.type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environement } from '../environnement';
import { from, Observable } from 'rxjs';
import { CookiesService } from '../shared/services/cookies.service';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private client: HttpClient, private cookiesService:CookiesService) {
  }

  signup(createUserSignup:Partial<CreateUserSignup>){
    console.log(createUserSignup)
    const tokenObservable = this.client.post(environement.apiURL + "/users/signup", createUserSignup) as Observable<string>
    tokenObservable.subscribe(token=>{this.cookiesService.setCookie(token)})
  }
}
