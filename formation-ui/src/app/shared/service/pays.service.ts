import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Pays} from "../../model/Pays";
import {AjoutResponse} from "../../model/AjoutResponse";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  getAllPays():Observable<Array<Pays>>{
    return this.http.get<Array<Pays>>(this.baseUrl+'/api/pays/pays',this.httpOptions);
  }
  addPays(pays: Pays):Observable<Pays>{
    return this.http.post<Pays>(this.baseUrl+'/api/pays/addPays',pays,this.httpOptions);
  }
  deletePays(id:number):Observable<AjoutResponse>{
    return this.http.post<AjoutResponse>(this.baseUrl+'/api/pays/deletePays',JSON.stringify(id),this.httpOptions).pipe(retry(1),
      catchError(this.handleError))
  }
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
