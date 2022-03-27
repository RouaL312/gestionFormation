import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-context-properties',
  templateUrl: './table-context-properties.component.html',
  styleUrls: ['./table-context-properties.component.css']
})
export class TableContextPropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];

}
