import { CookiesService } from './../shared/services/cookies.service';
import { Component, OnInit } from '@angular/core';
import { RandomMealsService } from './random-meals.service';
import { catchError } from 'rxjs';
import { Meal } from '../@types/Meal.type';
import { FoodSectionComponent } from "./food-section/food-section.component";
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ButtonComponent } from "../shared/button/button.component";
import { NgFor } from '@angular/common';
import { RouteProtectionService } from '../auth/route-protection.service';
import { User } from '../@types/User.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-meals',
  standalone: true,
  imports: [
    RandomMealsComponent,
    FoodSectionComponent,
    NgFor,
    SidebarComponent,
    ButtonComponent,
],
  templateUrl: './random-meals.component.html',
  styleUrl: './random-meals.component.css'
})
export class RandomMealsComponent implements OnInit{
  randomMeals: Meal[] = []
  user?:User
  token:string= ""
  ngOnInit(): void {
    const tokenPromise = this.cookiesService.getCookie();
    tokenPromise.then((token)=>{
      this.token = token
      return this.routeProtectionService.routeProtection(token, "/signin", this.cookiesService);
    })
    .then((user)=>{
      this.user = user
      this.randomMealsService.getRandomMeals(this.token)
        .pipe(
          catchError((err)=>{
            return [];
          })
        ).subscribe(meals=>{
          this.randomMeals = meals
        })
      })
    .catch((res)=>{
      console.log("something bad happened")
    })
  }

  handleClickRegenerate(){
    this.randomMealsService.getRandomMeals(this.token)
      .pipe(
        catchError((err)=>{
          return [];
        })
      ).subscribe(meals=>{
        this.randomMeals = meals
      })
  }

  constructor(
    private randomMealsService: RandomMealsService,
    private routeProtectionService: RouteProtectionService,
    private cookiesService: CookiesService,
    private router:Router
  ){
  }

}
