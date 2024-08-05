import { Component, Input } from '@angular/core';
import { MiniSearchComponent } from '../../shared/mini-search/mini-search.component';
import { NgClass, NgFor } from '@angular/common';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [
    MiniSearchComponent,
    NgFor,
    CheckboxComponent,
    NgClass
  ],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css'
})
export class StepTwoComponent {
  @Input("step-two-allergies")
  allergies: string[] = []
  @Input("step-two-preferences")
  preferences: string[] = []
  @Input("step-two-chooseAllergie")
  handleChooseAllergie? : (name:string)=>void
  @Input("step-two-choosePreference")
  handleChoosePreference? : (name:string)=>void
  @Input("step-two-showed")
  showed: number = 0;
}
