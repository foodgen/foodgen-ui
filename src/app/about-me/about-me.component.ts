import { Component } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { AuthComponent } from "../auth/auth.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SidebarComponent, AuthComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
