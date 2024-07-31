import { Component } from '@angular/core';
import { RandomMealsService } from './services/random-meals.service';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-random-meals',
  standalone: true,
  imports: [],
  templateUrl: './random-meals.component.html',
  styleUrl: './random-meals.component.css'
})
export class RandomMealsComponent {
  constructor(private randomMealsService:RandomMealsService, private recipesService: RecipesService){

  }
  handleGetRandom(){
    //TODO: please implement getting randomMeal from backend
  }

  handleGetRecipe(){
    //TODO: please implement getting a list of recipes
  }

}
