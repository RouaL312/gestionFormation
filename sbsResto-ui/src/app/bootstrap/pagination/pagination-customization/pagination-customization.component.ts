import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-customization',
  templateUrl: './pagination-customization.component.html',
  styleUrls: ['./pagination-customization.component.css']
})
export class PaginationCustomizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page = 4;

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}
