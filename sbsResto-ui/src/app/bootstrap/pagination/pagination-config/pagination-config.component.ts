import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination-config',
  templateUrl: './pagination-config.component.html',
  styleUrls: ['./pagination-config.component.css'],
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class PaginationConfigComponent implements OnInit {

  page = 4;

  constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }

}
