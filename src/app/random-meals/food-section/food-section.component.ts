import { Component, Input } from '@angular/core';
import { Meal } from '../../@types/Meal.type';
import { ButtonComponent } from '../../shared/button/button.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-food-section',
  standalone: true,
  imports: [
    ButtonComponent,
    NgFor
  ],
  templateUrl: './food-section.component.html',
  styleUrl: './food-section.component.css'
})
export class FoodSectionComponent {
  @Input("food-section-meal")
  meal?:Meal;
}
