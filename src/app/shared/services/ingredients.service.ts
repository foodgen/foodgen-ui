import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environement } from '../../environnement';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private client: HttpClient) { }
  getAllIngredients() : Observable<string[]>{
    const ingredients = from(this.client.get(environement.apiURL + "/ingredients")) as Observable<string[]>;
    return ingredients;
  }
}
