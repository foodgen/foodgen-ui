import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../environnement';
import { catchError, from, Observable } from 'rxjs';
import { Meal } from '../@types/Meal.type';

@Injectable({
  providedIn: 'root'
})
export class RandomMealsService {
  constructor(private client:HttpClient) { }
  getRandomMeals() : Observable<Meal[]>{
    return from(this.client.get(environement.apiURL + "/meals")) as Observable<Meal[]>
  }
}
