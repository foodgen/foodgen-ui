import { CookiesService } from './../shared/services/cookies.service';
import { RouteProtectionService } from './../auth/route-protection.service';
import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { MiniSearchComponent } from '../shared/mini-search/mini-search.component';
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';
import { NgFor, NgIf } from '@angular/common';
import { User } from '../@types/User.type';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    SidebarComponent,
    NgFor,
    MiniSearchComponent,
    NgIf,
    CheckboxComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit{
  choosedAllergies: string[] = [];
  choosedPreferences: string[] = [];
  allergies: string[] = [];
  preferences: string[] = [];
  user?:User;
  handleChoosePreference(name: string) {
    const index = this.choosedPreferences.findIndex((value) => (value = name));
    if (index < 0) {
      this.choosedPreferences.push(name);
    } else {
      this.choosedPreferences.splice(index, 0);
    }
  }

  handleChooseAllergie(name: string) {
    const index = this.choosedAllergies.findIndex((value) => (value = name));
    if (index < 0) {
      this.choosedAllergies.push(name);
    } else {
      this.choosedAllergies.splice(index, 0);
    }
  }

  ngOnInit(): void {
    this.cookiesService.getCookie().then((token)=>{
      return this.routeProtectionService.routeProtection(token, "signin", this.cookiesService)
    }).then((user)=>{
      this.user = user
      this.choosedAllergies = user.allergies
      this.choosedPreferences = user.preferences
    })
  }

  constructor(private routeProtectionService:RouteProtectionService, private cookiesService:CookiesService){

  }
}
