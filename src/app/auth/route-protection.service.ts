import { Injectable } from '@angular/core';
import { CookiesService } from '../shared/services/cookies.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from '../@types/User.type';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteProtectionService {
  routeProtection(
    token: string,
    redirectTo: string,
    cookiesService: CookiesService
  ): Promise<User> {
    let user = this.authService.whoami(token);
    return new Promise((res,rej) => {
      user
        .pipe(
          catchError((err) => {
            this.router.navigateByUrl(redirectTo);
            rej(err)
            return '';
          })
        )
        .subscribe((user) => {
          if (user.toString().length === 0) {
            cookiesService.deleteCookie();
            this.router.navigateByUrl(redirectTo);
            rej("no user with that ")
            return;
          } else {
            res(user as User)
          }
        }).unsubscribe();
    });
  }
  constructor(private authService: AuthService, private router: Router) {}
}
