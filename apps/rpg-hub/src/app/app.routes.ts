import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@rpg-hub/feature-landing-page').then(
        (mod) => mod.LandingPageComponent
      ),
  },
];
