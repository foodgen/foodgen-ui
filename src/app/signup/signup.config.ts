import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './signup.routes';

export const signupConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ],
};
