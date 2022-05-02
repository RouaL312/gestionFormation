import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Version} from "../../model/Version";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }

  getVersion(): Observable<Version> {
    return this.http.get<Version>(this.baseUrl + 'version/getVersion')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }


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
