import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {AuthService} from "./service/auth.service";
import {JwtAuthResponse} from "../model/jwt-auth-response";
import {User} from "../model/User";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  token: any;

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  this.token = this.authService.getToken();
    if (this.token) {
      request = this.addToken(request, this.token);
    }

    // @ts-ignore
    return next.handle(request).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse && (err.status === 403)) {
        return this.handle403Error(request, next);
      } else if (err instanceof HttpErrorResponse && (err.status === 401)) {
        return this.handle401Error(request, next);
      } else {
        return throwError(err);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  private addBody(request: HttpRequest<any>) {
    const loginSbs = localStorage.retrieve('loginSBS')
    return request.clone({
      body: {...loginSbs}
    });
  }

  private handle403Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      // @ts-ignore
      return this.authService.refreshToken().pipe(switchMap((token: any) => {
          this.isRefreshing = false;
          if (token === null) {
            token = new class implements JwtAuthResponse{
              authorities!: [] ;
              expiresAt: number | undefined;
              login: string | undefined;
              refreshToken: string | undefined;
              user: User | undefined;
              authenticationToken: string | undefined;
            }
            token.authenticationToken = this.authService.getToken();
          }
          if (token.authenticationToken === null) {
            return ;
          }
          this.refreshTokenSubject.next(token.authenticationToken);
          return next.handle(this.addToken(request, token.authenticationToken));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(authenticationToken => {
          return next.handle(this.addToken(request, authenticationToken));
        }));
    }
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
      return this.authService.loginSBS().pipe(
        switchMap((token: any) => {
          this.refreshTokenSubject.next(this.token);
          request = this.addBody(request)
          return next.handle(this.addToken(request, this.token));
        }));
  }
}
