import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * if user is not logged he will be redirect to the login page
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login')
      return !this.authService.isAuthenticated();
    } else {
      return this.authService.isAuthenticated();
    }
  }
}
