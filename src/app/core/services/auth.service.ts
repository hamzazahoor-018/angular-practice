import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  readonly isLoggedIn$ = this.loggedIn.asObservable();

  isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  login(): void {
    this.loggedIn.next(true);
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}
