import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Formations} from "../../model/Formations";
import {AjoutResponse} from "../../model/AjoutResponse";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getAllFormations(): Observable<Array<Formations>> {
    return this.http.get<Array<Formations>>(this.baseUrl + '/api/formation/formations')
  }
  addFormation(session: Formations): Observable<Formations> {
    return this.http.post<Formations>(this.baseUrl + '/api/formation/addFormation', session, this.httpOptions);
  }

  deleteFormation(id: number ): Observable<AjoutResponse> {
    return this.http.post<AjoutResponse>(this.baseUrl + '/api/formation/deleteFormation', JSON.stringify(id), this.httpOptions)
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
