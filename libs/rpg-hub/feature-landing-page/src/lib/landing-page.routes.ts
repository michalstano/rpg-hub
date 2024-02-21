import { Route } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';

export const LandingPageRoutes: Route[] = [
  {
    path: '',
    component: LandingPageComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
