import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Formateurs} from "../../model/Formateurs";
import {Session} from "../../model/Session";
import {environment} from "../../../environments/environment";
import {AjoutResponse} from "../../model/AjoutResponse";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getAllSession(): Observable<Array<Session>> {
    return this.http.get<Array<Session>>(this.baseUrl + '/api/session/sessions')
  }
  addSession(session: Session): Observable<Session> {
    return this.http.post<Session>(this.baseUrl + '/api/session/addSession', session, this.httpOptions);
  }

  deleteSession(id: number ): Observable<AjoutResponse> {
    return this.http.post<AjoutResponse>(this.baseUrl + '/api/session/deleteSession', JSON.stringify(id), this.httpOptions)
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
