import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Equipe} from "../../model/Equipe";

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  addEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.baseUrl + '/api/equipes/addEquipe', equipe, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  updateEquipe(equipe: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/api/equipes/updateEquipe', equipe, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  deleteEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + '/api/equipes/deleteEquipe'}?idEquipe=${id}`, { responseType: 'text' })
  }

  getAllEquipe(): Observable<Array<Equipe>> {
    return this.http.get<Array<Equipe>>(this.baseUrl + '/api/equipes/listEquipes')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }
  getEquipePeriode(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.baseUrl + '/api/equipes/getEquipe'}?idEquipe=${id}`)
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
