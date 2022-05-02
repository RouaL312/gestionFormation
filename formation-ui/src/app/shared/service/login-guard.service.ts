import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate():any {
    if (!this.authService.isAuthenticated()) {
      return !this.authService.isAuthenticated();
    }
  }
}
