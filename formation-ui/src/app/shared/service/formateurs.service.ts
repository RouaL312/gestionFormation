import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalStorageService} from "ngx-webstorage";
import {Observable} from "rxjs";
import {User} from "../../model/User";
import {Formateurs} from "../../model/Formateurs";

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
}
