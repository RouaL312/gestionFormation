import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-size',
  templateUrl: './pagination-size.component.html',
  styleUrls: ['./pagination-size.component.css']
})
export class PaginationSizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  currentPage = 3;

}
