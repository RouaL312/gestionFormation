import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-footertemplate',
  templateUrl: './datepicker-footertemplate.component.html',
  styleUrls: ['./datepicker-footertemplate.component.css']
})
export class DatepickerFootertemplateComponent implements OnInit {

   model!: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
  }

}
