import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Role} from "../../model/Role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.baseUrl + '/api/role/addRole', role, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  updateRole(role: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/api/role/updateRole', role, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + '/api/role/deleteRole'}?idRole=${id}`, { responseType: 'text' })
  }

  getAllRole(): Observable<Array<Role>> {
    return this.http.get<Array<Role>>(this.baseUrl + '/api/role/allRoles')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }
  // Error handling
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
