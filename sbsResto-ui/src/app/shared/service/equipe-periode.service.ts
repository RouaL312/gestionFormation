import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EquipePeriode} from "../../model/EquipePeriode";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EquipePeriodeService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  addEquipePedriode(equipePeriode: EquipePeriode): Observable<EquipePeriode> {
    return this.http.post<EquipePeriode>(this.baseUrl + 'api/EquipePeriode/addEquipePeriode', equipePeriode, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  updateEquipePeriode(equipePeriode: Object): Observable<Object> {
    return this.http.post(this.baseUrl + 'api/EquipePeriode/updateEquipePeriode', equipePeriode, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  deleteEquipePeriode(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + 'api/EquipePeriode/deleteEquipePeriode'}?idEquipePeriode=${id}`, { responseType: 'text' })
  }

  getAllEquipePeriode(): Observable<Array<EquipePeriode>> {
    return this.http.get<Array<EquipePeriode>>(this.baseUrl + 'api/EquipePeriode/listEquipePeriode')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }
  getEquipePeriode(id: number): Observable<EquipePeriode> {
    return this.http.get<EquipePeriode>(`${this.baseUrl + 'api/EquipePeriode/getEquipePeriode'}?idEquipePeriode=${id}`)
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
