import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-basic',
  templateUrl: './pagination-basic.component.html',
  styleUrls: ['./pagination-basic.component.css']
})
export class PaginationBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   page = 4;

}
