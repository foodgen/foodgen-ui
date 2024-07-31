import { Injectable } from '@angular/core';
import { environement } from './environnement';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  private name:string = "";
  constructor(private document: Document) {
    this.name = environement.cookieIdentifier;
  }

  setCookie(value:string){
    this.document.cookie = `${this.name}=${value};`
  }
  deleteCookie(){
    this.setCookie('')
  }

  getCookie(){
    const token = this.document.cookie;
    if(token.length === 0){
      return;
    }
    return token.split("=")[1]
  }
}
