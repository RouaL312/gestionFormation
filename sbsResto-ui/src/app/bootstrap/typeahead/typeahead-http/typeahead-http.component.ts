import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable()
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }
    
      return this.http
      .get(WIKI_URL, {params: PARAMS.set('search', term)}).pipe(
      map((response: any) => response[1]),
      catchError(<T>(error: any, result?: T) => {
        // console.log(erro);
        return of(result as T);
      })
    );
      
      
      
  }
}




@Component({
  selector: 'app-typeahead-http',
  templateUrl: './typeahead-http.component.html',
  providers: [WikipediaService],
  styleUrls: ['./typeahead-http.component.css']
})
export class TypeaheadHttpComponent implements OnInit {

  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: WikipediaService) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
             return of([]); 
          }))
      ),
      tap(() => this.searching = false)
    ) 


  ngOnInit(): void {
  }

}
