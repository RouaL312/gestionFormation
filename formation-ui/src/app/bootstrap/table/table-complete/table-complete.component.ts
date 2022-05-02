import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {Observable} from 'rxjs';
import {CountryService} from '../../../country.service';
import {Country} from '../../../country';
import {NgbdSortableHeader, SortEvent} from '../../../sortable.directive';

@Component({
  selector: 'app-table-complete',
  templateUrl: './table-complete.component.html',
  styleUrls: ['./table-complete.component.css'],
  providers: [CountryService, DecimalPipe]
})
export class TableCompleteComponent implements OnInit {

  countries$: Observable<Country[]>;
  total$: Observable<any>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngOnInit(): void {
  }

}
