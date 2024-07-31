import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './signin.routes';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SigninModule { }
