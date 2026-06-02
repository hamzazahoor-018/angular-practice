import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type ProfileValue = {
  name: string;
  email: string;
  skills: string[];
};

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './reactive-form.html',
})
export class ReactiveFormComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    skills: this.fb.array([this.fb.control('Angular', [Validators.required])]),
  });

  submitted = signal<ProfileValue | null>(null);

  addSkill(): void {
    this.form.controls.skills.push(this.fb.control('', [Validators.required]));
  }

  removeSkill(index: number): void {
    if (this.form.controls.skills.length === 1) {
      return;
    }

    this.form.controls.skills.removeAt(index);
  }

  submit(): void {
    this.submitted.set(this.form.getRawValue());
    this.form.reset({
      name: '',
      email: '',
      skills: ['Angular'],
    });
  }
}
