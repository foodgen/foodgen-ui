import { Component, OnInit } from '@angular/core';
import { RandomMealsService } from './services/random-meals.service';
import { RecipesService } from './services/recipes.service';
import { catchError } from 'rxjs';
import { Meal } from '../@types/Meal.type';

@Component({
  selector: 'app-random-meals',
  standalone: true,
  imports: [],
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

  handleGetRandom(){
    //TODO: please implement getting randomMeal from backend
  }

  handleGetRecipe(){
    //TODO: please implement getting a list of recipes
  }

  constructor(private randomMealsService:RandomMealsService, private recipesService: RecipesService){

  }

}
