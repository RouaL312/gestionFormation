import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Pays} from "../../model/Pays";
import {AjoutResponse} from "../../model/AjoutResponse";
import {catchError, retry} from "rxjs/operators";
import { Domaine } from 'src/app/model/Domaine';

@Injectable({
  providedIn: 'root'
})
export class DomainesService {
  private baseUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  getAllDomaine():Observable<Array<Domaine>>{
    return this.http.get<Array<Domaine>>(this.baseUrl+'/api/domaine/domaine',this.httpOptions);
  }

  addDomaine(domaine: Domaine):Observable<Pays>{
    return this.http.post<Domaine>(this.baseUrl+'/api/domaine/addDomaine',domaine,this.httpOptions);
  }

  deleteDomaine(id:number):Observable<AjoutResponse>{
    return this.http.post<AjoutResponse>(this.baseUrl+'/api/pays/deleteDomaine',JSON.stringify(id),this.httpOptions).pipe(retry(1),
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
