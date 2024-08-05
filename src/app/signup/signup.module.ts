import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './signup.routes';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignupModule { }

