import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-filter-validation',
  templateUrl: './datepicker-filter-validation.component.html',
  styleUrls: ['./datepicker-filter-validation.component.css']
})
export class DatepickerFilterValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
