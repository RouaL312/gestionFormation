import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-multiple',
  templateUrl: './datepicker-multiple.component.html',
  styleUrls: ['./datepicker-multiple.component.css']
})
export class DatepickerMultipleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

}
