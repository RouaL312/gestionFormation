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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authResponse: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  baseUrl = environment.baseUrl;
  refreshTokenRequest: RefreshTokenRequest | undefined;
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(auth: LoginPayload): Observable<JwtAuthResponse> {
    return this.http.post<JwtAuthResponse>(this.baseUrl+'/auth/login', auth, this.httpOptions).pipe(map(data => {
      localStorage.setItem('token', JSON.stringify(data.authenticationToken));
      localStorage.setItem('login', JSON.stringify(data.login));
      localStorage.setItem('roles', JSON.stringify(data.authorities));
      this.refreshTokenRequest = data;
      localStorage.setItem('refreshToken', JSON.stringify(this.refreshTokenRequest));
      this.token = data.authenticationToken;
      return data;
    }));
  }

  getUserByLogin(login: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl + '/auth/getUserByLogin'}?login=${login}`);
  }

  logout(): Promise<any> {
    let refreshToken : RefreshTokenRequest;
    refreshToken = JSON.parse(localStorage.getItem('refreshToken')!);
    return this.http.post(this.baseUrl + '/auth/logout', refreshToken, {responseType: 'text'}).toPromise();
  }

  refreshToken() {
    let refreshToken : RefreshTokenRequest;
    if (localStorage.get('refreshtoken') !== null) {
      refreshToken = JSON.parse(localStorage.getItem('refreshToken')!)
    }
    return this.http.post<JwtAuthResponse>(this.baseUrl + '/auth/refresh', refreshToken!).pipe(map(data => {
      if (data !== null) {
        localStorage.setItem('token', data.authenticationToken!);
        localStorage.setItem('login', data.login!);
        this.refreshTokenRequest = data;
        localStorage.setItem('refreshToken', JSON.stringify(this.refreshTokenRequest));
        return data;
      } else {
        localStorage.clear();
        this.router.navigateByUrl('/login');
        return data;
      }
    }));
  }

  loginSBS(): Observable<LoginSbs> {
    return this.http.post<LoginSbs>(this.baseUrl + '/auth/loginSBS', localStorage.retrieve('login')).pipe(map(data => {
      localStorage.store('loginSBS', data);
      return data
    }));
  }

  isAuthenticated() {
    this.authResponse = JSON.parse(<string>localStorage.getItem('authResponse'))
    if (this.authResponse){return this.authResponse.login != null;} else {return false;}
  }
  getToken() {
    if (localStorage.getItem('token')!==null){
      return JSON.parse(<string>localStorage.getItem('token'))
    } else {
      return null;
    }
  }
}
