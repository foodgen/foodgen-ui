import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../environnement';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StepOneService {
  private client:HttpClient

  constructor(client: HttpClient) {
    this.client = client;
  }

  signup(){
    const observable = from(
      new Promise((res, rej) => {
        setTimeout(() => {
          res('ok');
        }, 1000);
      })
    );
    observable.subscribe(value => {
      console.log(value)
    })
  }
}
