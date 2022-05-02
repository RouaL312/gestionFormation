import { CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  // @ts-ignore
  canActivate() {
    if (!this.authService.isAuthenticated()) {
      return !this.authService.isAuthenticated();
    }else {
      return undefined;
    }
  }
}
