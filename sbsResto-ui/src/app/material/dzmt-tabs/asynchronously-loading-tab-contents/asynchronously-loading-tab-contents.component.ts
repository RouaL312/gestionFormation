import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}


@Component({
  selector: 'app-asynchronously-loading-tab-contents',
  templateUrl: './asynchronously-loading-tab-contents.component.html',
  styleUrls: ['./asynchronously-loading-tab-contents.component.css']
})
export class AsynchronouslyLoadingTabContentsComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'First', content: 'Content 1'},
          {label: 'Second', content: 'Content 2'},
          {label: 'Third', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit(): void {
  }

}
