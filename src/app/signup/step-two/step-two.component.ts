import { Component } from '@angular/core';
import { MiniSearchComponent } from '../../shared/mini-search/mini-search.component';
import { NgFor } from '@angular/common';
import { CheckboxComponent } from '../../shared/checkbox/checkbox.component';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [MiniSearchComponent, NgFor, CheckboxComponent],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.css'
})
export class StepTwoComponent {
  allergies: string[] = []
  preferences: string[] = []
  handleChooseAllergie? : ()=>void
  handleChoosePreference? : ()=>void
}
