import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { UserInformationComponent } from "./user-information/user-information.component";
import { LinksComponent } from "./links/links.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    UserInformationComponent,
    LinksComponent,
    ButtonComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  showed:boolean = true;
}
