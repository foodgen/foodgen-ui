import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environments/environment';
import { catchError, from, Observable } from 'rxjs';
import { Meal } from '../@types/Meal.type';

@Injectable({
  providedIn: 'root'
})
export class RandomMealsService {
  constructor(private client:HttpClient) { }
  getRandomMeals(token:string) : Observable<Meal[]>{
    return from(this.client.get(environement.apiURL + "/meals",{
      headers:{
        "Authorisation":token
      }
    })) as Observable<Meal[]>
  }
}
