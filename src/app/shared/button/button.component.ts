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
  handleClick:(...arg:any) => void = () => {
    console.log("no click event implemented")
  }

  @Input("button-variant")
  variant:ButtonVariants = ButtonVariants.primary
}
