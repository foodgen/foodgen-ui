import { Component, Input, ViewChildren } from '@angular/core';
import { ButtonVariants } from './button.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input("handleClick")
  handleClick?:(...arg:any) => void;
  @Input("button-type")
  type: "submit" | "button" | "menu" | "reset" = "submit"

  @Input("button-variant")
  variant:ButtonVariants = ButtonVariants.primary
}
