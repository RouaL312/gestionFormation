import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class RoutesGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (!this.authService.isAdmin()) {
      this.router.navigateByUrl('/team-declaration-employee')
    } else {
      return this.authService.isAdmin();
    }
  }
}
