import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.component.html',
  styleUrls: ['./datepicker-basic.component.css']
})
export class DatepickerBasicComponent implements OnInit {

  model!: NgbDateStruct;
  date!: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
  
  ngOnInit(): void {
  }
  

}
