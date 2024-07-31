import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input("input-label")
  label:string = ""

  @Input("input-type")
  type:"text" | "password" = "text"

  @Input("input-formControl")
  formControl: FormControl | null = null;
}
