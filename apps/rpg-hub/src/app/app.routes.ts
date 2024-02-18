import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@rpg-hub/feature-landing-page').then(
        (mod) => mod.LandingPageRoutes
      ),
  },
];
