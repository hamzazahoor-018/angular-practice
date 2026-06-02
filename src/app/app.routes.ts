import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((c) => c.Home),
    title: 'Home',
  },
  {
  path: 'learn',
  children: [
    {
      path: '',
      loadComponent: () =>
        import('./features/learn/list/list').then((c) => c.ListComponent),
      title: 'Learn — List',
    },
    {
      path: ':id',
      loadComponent: () =>
        import('./features/learn/details/details').then((c) => c.DetailsComponent),
      title: 'Learn — Details',
    },
  ],
},
  {
    path: '**',
    redirectTo: 'home',
  },
];