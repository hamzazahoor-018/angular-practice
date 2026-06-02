import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learn-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.html',
})
export class DetailsComponent {
  private readonly route = inject(ActivatedRoute);

  id = this.route.snapshot.params['id'];
  hasUnsavedChanges = false;

  toggleUnsavedChanges(): void {
    this.hasUnsavedChanges = !this.hasUnsavedChanges;
  }

  canDeactivate(): boolean {
    if (!this.hasUnsavedChanges) {
      return true;
    }

    return confirm('You have unsaved changes. Leave this page?');
  }
}