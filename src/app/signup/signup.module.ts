import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './signup.routes';
import { CommonModule } from '@angular/common';

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

