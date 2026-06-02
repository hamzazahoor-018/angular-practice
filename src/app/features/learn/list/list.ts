import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.html',
})
export class ListComponent {
  private readonly router = inject(Router);

  list = [1, 2, 3];

  openDetails(id: number) {
    this.router.navigate(['/learn', id]);
  }
}