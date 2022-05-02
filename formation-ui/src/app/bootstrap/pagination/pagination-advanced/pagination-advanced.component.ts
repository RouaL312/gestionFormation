import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-advanced',
  templateUrl: './pagination-advanced.component.html',
  styleUrls: ['./pagination-advanced.component.css']
})
export class PaginationAdvancedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  page = 1;

}
