import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  get returnUrl(): string {
    return this.route.snapshot.queryParamMap.get('returnUrl') ?? '/home';
  }

  login(): void {
    this.auth.login();
    void this.router.navigateByUrl(this.returnUrl);
  }
}
