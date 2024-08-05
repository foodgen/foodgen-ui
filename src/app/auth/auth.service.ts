import { CookiesService } from '../shared/services/cookies.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environments/environment';
import { from } from 'rxjs';
import { User } from '../@types/User.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  whoami(token?:string){
    if (token && token.length !== 0) {
      return from(
        this.client.get<User | string>(environement.apiURL + "/users/whoami", {
          headers: {
            Authorization: token,
          },
        })
      );
    }else{
      return;
    }
  }

  constructor(private client:HttpClient) { }
}
