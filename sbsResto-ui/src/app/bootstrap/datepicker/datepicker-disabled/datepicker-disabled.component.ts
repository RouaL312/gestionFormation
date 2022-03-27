import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-disabled',
  templateUrl: './datepicker-disabled.component.html',
  styleUrls: ['./datepicker-disabled.component.css']
})
export class DatepickerDisabledComponent implements OnInit {

  model!: NgbDateStruct;
  disabled = true;

  constructor(calendar: NgbCalendar) {
    this.model = calendar.getToday();
  }

  ngOnInit(): void {
  }

}
