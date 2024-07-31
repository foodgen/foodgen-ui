import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'castToFormcontrol',
  standalone: true
})
export class CastToFormcontrolPipe implements PipeTransform {

  transform(value: AbstractControl<any> | null, ...args: unknown[]): FormControl {
    return value as FormControl;
  }

}
