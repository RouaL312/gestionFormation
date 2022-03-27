import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-configurable-paginator',
  templateUrl: './configurable-paginator.component.html',
  styleUrls: ['./configurable-paginator.component.css']
})
export class ConfigurablePaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent!: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

}
