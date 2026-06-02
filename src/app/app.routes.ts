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
    loadComponent: () => import('./features/learn/learn').then((c) => c.Learn),
    title: 'Learn',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];