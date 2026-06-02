import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

const router = inject(Router);

export class ListComponent {
  list = [1, 2, 3];
  
  openDetails(id: number) {
    router.navigate(['/learn', id]);
  }
}