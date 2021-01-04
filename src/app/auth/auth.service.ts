import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private UserIsAuthenticated = false;

  get userIsAuthenticated() {
    return this.UserIsAuthenticated;
  }

  constructor() { }

  login() {
    this.UserIsAuthenticated = true;
  }

  logout() {
    this.UserIsAuthenticated = false;
  }
}
