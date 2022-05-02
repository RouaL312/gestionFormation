import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-custom-date-classes',
  templateUrl: './datepicker-custom-date-classes.component.html',
  styleUrls: ['./datepicker-custom-date-classes.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerCustomDateClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

}
