import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'signup-checkbox',
  standalone: true,
  imports: [NgClass],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input("checkbox-value")
  value:string = "";

  @Input("checkbox-name")
  name:string = "";

  @Input("checkbox-label")
  label:string=""

  checked = false
  handleInput(event: Event){
    const ref = event.target as HTMLInputElement
    console.log(ref.checked)
    if(ref.checked){
      this.checked = true
    }else{
      this.checked = false
    }
  }
}
