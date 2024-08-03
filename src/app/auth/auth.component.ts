import { CookiesService } from './../shared/services/cookies.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { catchError, from, retry } from 'rxjs';
import { User } from '../@types/User.type';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  constructor(private authService:AuthService, private router:Router,private cookiesService:CookiesService){}
  user!:User;
  ngOnInit(): void {
    const token = this.cookiesService.getCookie();
    let user;
    if(token){
      user = this.authService.whoami(token);
    }
    if(!user){
      this.router.navigateByUrl("/signin")
    }else{
      user.pipe(
        catchError((err)=>{
          console.log("some error happened")
          return "";
        }),
        retry(3)
      ).subscribe(user => {
        if(user.toString().length === 0){
          this.cookiesService.deleteCookie()
          this.router.navigateByUrl("/signin")
        }else{
          this.user = user as User;
        }
      })
    }
  }

}
