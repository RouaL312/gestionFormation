import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-min-max-validation',
  templateUrl: './datepicker-min-max-validation.component.html',
  styleUrls: ['./datepicker-min-max-validation.component.css']
})
export class DatepickerMinMaxValidationComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }

}
