import { Component, OnInit } from '@angular/core';
import { RandomMealsService } from './random-meals.service';
import { catchError } from 'rxjs';
import { Meal } from '../@types/Meal.type';
import { FoodSectionComponent } from "./food-section/food-section.component";
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ButtonComponent } from "../shared/button/button.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-random-meals',
  standalone: true,
  imports: [
    RandomMealsComponent,
    FoodSectionComponent,
    NgFor,
    SidebarComponent,
    ButtonComponent
],
  templateUrl: './random-meals.component.html',
  styleUrl: './random-meals.component.css'
})
export class RandomMealsComponent implements OnInit{
  randomMeals: Meal[] = []
  ngOnInit(): void {
    this.randomMealsService.getRandomMeals()
      .pipe(
        catchError((err)=>{
          return [];
        })
      ).subscribe(meals=>{
        this.randomMeals = meals
      })
  }

  handleClickRegenerate(){
    this.randomMealsService.getRandomMeals()
      .pipe(
        catchError((err)=>{
          return [];
        })
      ).subscribe(meals=>{
        this.randomMeals = meals
      })
  }

  constructor(private randomMealsService:RandomMealsService){

  }

}
