import { Injectable } from '@angular/core';
import { SigninUser } from './SigninUser.type';
import { HttpClient } from '@angular/common/http';
import { environement } from '../environnement';
import { CookiesService } from '../shared/services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private client: HttpClient, private cookiesService: CookiesService){
  }
  signin(inputs: Partial<SigninUser>){
    //TODO: implement signin provider from api
    this.client.post(environement.apiURL, {...inputs})
  }
}
