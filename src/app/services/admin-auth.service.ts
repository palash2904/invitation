import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private readonly STORAGE_KEY = 'wedding_admin_authenticated';
  
  // Default admin passwords accepted
  private readonly VALID_PASSWORDS = ['wedding2926', 'wedding2026'];

  public readonly isAuthenticated = signal<boolean>(this.getInitialAuthState());

  private getInitialAuthState(): boolean {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        return window.localStorage.getItem(this.STORAGE_KEY) === 'true';
      } catch {
        return false;
      }
    }
    return false;
  }

  public login(password: string): boolean {
    const trimmed = password.trim();
    if (!trimmed) {
      return false;
    }

    const isValid = this.VALID_PASSWORDS.some(
      (valid) => valid.toLowerCase() === trimmed.toLowerCase()
    );

    if (isValid) {
      this.isAuthenticated.set(true);
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          window.localStorage.setItem(this.STORAGE_KEY, 'true');
        } catch {
          // localStorage fallback
        }
      }
      return true;
    }

    return false;
  }

  public logout(): void {
    this.isAuthenticated.set(false);
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.removeItem(this.STORAGE_KEY);
      } catch {
        // localStorage fallback
      }
    }
  }
}
