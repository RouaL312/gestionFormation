import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable, throwError} from "rxjs";
import {User} from "../../model/User";
import {Formateurs} from "../../model/Formateurs";
import {AjoutResponse} from "../../model/AjoutResponse";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormateursService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getAllFormateurs(): Observable<Array<Formateurs>> {
    return this.http.get<Array<Formateurs>>(this.baseUrl + '/api/formateur/formateurs')
  }

  addFormateur(formateur: Formateurs): Observable<Formateurs> {
    console.log(formateur)
      return this.http.post<Formateurs>(this.baseUrl + '/api/formateur/addFormateur', formateur, this.httpOptions);
  }

  deleteFormateur(id: number ): Observable<AjoutResponse> {
    return this.http.post<AjoutResponse>(this.baseUrl + '/api/formateur/deleteFormateur', JSON.stringify(id), this.httpOptions)
      .pipe(retry(1),
        catchError(this.handleError))
  }
  // Error handling
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
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
