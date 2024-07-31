import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-search',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mini-search.component.html',
  styleUrl: './mini-search.component.css'
})
export class MiniSearchComponent {
  @Input("mini-search-placeholder")
  placeHolder:string = ""

  focus = false;

  handleFocus(){
    this.focus = true;
  }

  handleBlur(){
    this.focus = false
  }
}
