import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginPayload} from "../../model/loginPayload";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {RefreshTokenRequest} from "../../model/refresh-Token-Request";
import {JwtAuthResponse} from "../../model/jwt-auth-response";
import {Router} from "@angular/router";
import {LoginSbs} from "../../model/LoginSbs";
import {User} from "../../model/User";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authResponse: JwtAuthResponse|undefined;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  baseUrl = environment.baseUrl;
  refreshTokenRequest: RefreshTokenRequest | undefined;
  token: any;

  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) { }

  login(auth: LoginPayload): Observable<JwtAuthResponse> {
    return this.http.post<JwtAuthResponse>(this.baseUrl + '/auth/login', auth).pipe(map(data => {
      console.log(data)
      if (data !== null){
        this.localStorageService.store('token', data.authenticationToken);
        this.localStorageService.store('login', data.username);
        this.localStorageService.store('authorities', data.authorities);
        this.refreshTokenRequest = data;
        this.localStorageService.store('refreshToken', this.refreshTokenRequest)
      }
      return data;
    }));
  }

  getUserByLogin(login: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl + '/auth/getUserByLogin'}?login=${login}`);
  }

  logout(): Promise<any> {
    return this.http.post(this.baseUrl + '/auth/logout', this.localStorageService.retrieve('refreshToken'), {responseType: 'text'}).toPromise();
  }

  refreshToken() {
    let refreshToken : RefreshTokenRequest;
    if (this.localStorageService.retrieve('refreshtoken') !== null) {
      refreshToken = this.localStorageService.retrieve('refreshtoken')
    }
    return this.http.post<JwtAuthResponse>(this.baseUrl + '/auth/refresh', refreshToken!).pipe(map(data => {
      if (data !== null) {
        this.localStorageService.store('token', data.authenticationToken);
        this.localStorageService.store('login', data.username);
        this.refreshTokenRequest = data;
        this.localStorageService.store('refreshToken', this.refreshTokenRequest)
        return data;
      } else {
        this.localStorageService.clear();
        this.router.navigateByUrl('/login');
        return data;
      }
    }));
  }

  loginSBS(): Observable<LoginSbs> {
    return this.http.post<LoginSbs>(this.baseUrl + '/auth/loginSBS', this.localStorageService.retrieve('login')).pipe(map(data => {
      this.localStorageService.store('loginSBS', data);
      return data
    }));
  }

  isAuthenticated() {
    return this.localStorageService.retrieve('login') != null;
  }

  getToken() {
    return this.localStorageService.retrieve('token');
  }
}
