import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.authService.userIsAuthenticated) {
        // if the user isn't authenticated, reroute to the login screen
        this.router.navigateByUrl('/auth');
      }
      // if the user is authenticated, this will continue in.
      return this.authService.userIsAuthenticated;
  }
}
