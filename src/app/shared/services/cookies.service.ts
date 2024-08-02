import { Inject, Injectable } from '@angular/core';
import { environement } from '../../environnement';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  private name:string = "";
  constructor(@Inject(DOCUMENT)private document: Document) {
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
    console.log("from token")
    if(token.length === 0){
      return;
    }
    return token.split("=")[1]
  }
}
