import { CookiesService } from '../shared/services/cookies.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environments/environment';
import { from, Observable } from 'rxjs';
import { User } from '../@types/User.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  whoami(token: string) : Observable<User> {
    return from(
      this.client.get<User>(environement.apiURL + '/users/whoami', {
        headers: {
          Authorization: token,
        },
      })
    );
  }
  constructor(private client: HttpClient) {}
}
