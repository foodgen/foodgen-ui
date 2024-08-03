import { Component } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { AuthComponent } from "../auth/auth.component";
import { MiniSearchComponent } from '../shared/mini-search/mini-search.component';
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';
import { NgFor } from '@angular/common';
import { User } from '../@types/User.type';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    SidebarComponent,
    AuthComponent,
    NgFor,
    MiniSearchComponent,
    CheckboxComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
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
}
