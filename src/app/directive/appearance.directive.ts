import { Directive } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';

@Directive({
  selector: 'mat-form-field',
  standalone: false
})
export class AppearanceDirective {

  constructor(private host : MatFormField) { 
    this.host.appearance = 'outline'
  }

}
