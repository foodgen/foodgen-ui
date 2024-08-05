import { AboutMeComponent } from './../about-me/about-me.component';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SigninUser } from '../@types/SigninUser.type';
import { HttpClient } from '@angular/common/http';
import { environement } from '../../environments/environment';
import { CookiesService } from '../shared/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private client: HttpClient){
  }
  signin(inputs: Partial<SigninUser>){
    //TODO: implement signin provider from api
    return from(this.client.post(environement.apiURL + "/users/login", {...inputs})) as Observable<string>
  }
}
