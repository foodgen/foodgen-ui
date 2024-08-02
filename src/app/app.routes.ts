import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",redirectTo:"signup", pathMatch:"full"},
  {path:"signup", loadChildren: () => import('./signup/signup.module').then(_=>_.SignupModule)},
  {path:"random-meals", loadChildren: () => import('./random-meals/random-meals.module').then(_=>_.RandomMealsModule)},
  {path:"about-me", loadChildren: () => import('./about-me/about-me.module').then(_=>_.AboutMeModule)},
  {path:"signin", loadChildren: () => import('./signin/signin.module').then(_=>_.SigninModule)}
];
