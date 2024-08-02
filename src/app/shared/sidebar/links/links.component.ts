import { Component, Input } from '@angular/core';
import { Link } from './Link.type';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent {
  links: Link[] = [
    {
      name: 'create meal',
      to: 'create-meal',
    },
    {
      name: 'about me',
      to:'user-room'
    }
  ];
}
