import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-disabled',
  templateUrl: './pagination-disabled.component.html',
  styleUrls: ['./pagination-disabled.component.css']
})
export class PaginationDisabledComponent implements OnInit {

  constructor() { }

  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  
  ngOnInit(): void {
  }

}
