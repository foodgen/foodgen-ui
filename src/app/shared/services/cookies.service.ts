import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environement } from '../../environnement';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  private name: string = '';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.name = environement.cookieIdentifier;
  }

  setCookie(value: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.document.cookie = `${this.name}=${value};`;
    }
  }
  deleteCookie() {
    this.setCookie('');
  }

  async getCookie():Promise<string>{
    return new Promise((res, rej) => {
      if (isPlatformBrowser(this.platformId)) {
        const token = this.document.cookie;
        if (token.length === 0) {
          rej("no token")
        }
        res(token.split('=')[1]);
      }
    });
  }
}
