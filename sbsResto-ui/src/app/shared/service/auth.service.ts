import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {LoginPayload} from "../../model/loginPayload";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResponse} from "../../model/AuthResponse";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {LocalStorageService} from "ngx-webstorage";
import {map} from "rxjs/operators";
import {RefreshTokenRequest} from "./refresh-Token-Request";
import {Role} from "../../model/Role";

@Injectable({
  providedIn: 'root'})
export class AuthService {
  token: string|null|undefined;
  username: string | undefined;
  private baseUrl = environment.baseUrl;
  refreshTokenRequest = new RefreshTokenRequest();

  authResponse!: AuthResponse;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private router: Router) {
  }
  login(auth: LoginPayload): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl + '/auth/signin', auth, this.httpOptions).pipe(map(data => {
      if (data.token != null) {
        localStorage.setItem('token', data.token);
      }
      if (data.username != null) {
        localStorage.setItem('username', data.username);
      }
        localStorage.setItem('authorities', JSON.stringify(data.authorities));
        localStorage.setItem('roles', JSON.stringify(data.roles));
      this.refreshTokenRequest.login = data.username;
      this.refreshTokenRequest.refreshToken = data.refreshToken;
      this.refreshTokenRequest.expiresAt = data.expiresAt;
      return data;
    }));
  }

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token
  }

  logout(): Promise<any> {
    return this.http.post(this.baseUrl + 'auth/logout', this.localStorageService.retrieve('refreshToken'), {responseType: 'text'}).toPromise();
  }
  isAuthenticated() {
    this.authResponse = JSON.parse(<string>localStorage.getItem('authResponse'))
    if (this.authResponse){return this.authResponse.username != null} else {return false}
  }

  // isAdmin() {
  //   let roles = [];
  //   roles = this.localStorageService.retrieve('roles');
  //   if (roles !== null) {
  //     if (roles === 'ADMIN' || roles === 'SUPER_ADMIN') {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  refreshToken() {
    let refreshToken = new RefreshTokenRequest()
    if (this.localStorageService.retrieve('refreshtoken') !== null) {
      refreshToken = this.localStorageService.retrieve('refreshtoken')
    }
    return this.http.post<AuthResponse>(this.baseUrl + 'auth/refresh', refreshToken).pipe(map(data => {
    }));
  }
}
