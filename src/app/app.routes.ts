import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { canDeactivateGuard } from './core/guards/can-deactivate.guard';

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
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then((c) => c.LoginComponent),
    title: 'Login',
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
        canActivate: [authGuard],
        canDeactivate: [canDeactivateGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];