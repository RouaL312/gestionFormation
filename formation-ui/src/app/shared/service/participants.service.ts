import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Participants} from "../../model/Participants";
import {AjoutResponse} from "../../model/AjoutResponse";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  getAllParticipants(): Observable<Array<Participants>> {
    return this.http.get<Array<Participants>>(this.baseUrl + '/api/participants/participants')
  }
  addParticipant(participant: Participants): Observable<Participants> {
    console.log(participant)
    return this.http.post<Participants>(this.baseUrl + '/api/participants/addParticipant', participant, this.httpOptions);
  }

  deleteParticipant(id: number ): Observable<AjoutResponse> {
    return this.http.post<AjoutResponse>(this.baseUrl + '/api/participants/deleteParticipant', JSON.stringify(id), this.httpOptions)
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
