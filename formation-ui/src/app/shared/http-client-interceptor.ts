import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthService} from "./service/auth.service";
import {JwtAuthResponse} from "../model/jwt-auth-response";

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  token!: string;

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(public authService: AuthService, private localStorageService: LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this.authService.getToken();
    if (this.token) {
      request = this.addToken(request, this.token);
    }

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
    const loginSbs = this.localStorageService.retrieve('loginSBS')
    return request.clone({
      body: {...loginSbs}
    });
  }

  private handle403Error(request: HttpRequest<any>, next: HttpHandler){
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((authResponse: JwtAuthResponse) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(authResponse.authenticationToken);
          return next.handle(this.addToken(request, this.token));
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

