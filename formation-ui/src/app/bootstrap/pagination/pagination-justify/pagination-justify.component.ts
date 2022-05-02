import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-justify',
  templateUrl: './pagination-justify.component.html',
  styleUrls: ['./pagination-justify.component.css']
})
export class PaginationJustifyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  page = 4;

}
