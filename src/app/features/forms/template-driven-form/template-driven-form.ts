import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

type FormValue = {
  name: string;
  email: string;
};

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './template-driven-form.html',
})
export class TemplateDrivenFormComponent {
  form = {
    name: '',
    email: '',
  } satisfies FormValue;

  submitted = signal<FormValue | null>(null);

  submit(form: NgForm): void {
    this.submitted.set({
      name: this.form.name.trim(),
      email: this.form.email.trim(),
    });

    form.resetForm();
  }
}
