import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import {NgbDatepicker, NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-custommonth',
  templateUrl: './datepicker-custommonth.component.html',
  styleUrls: ['./datepicker-custommonth.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerCustommonthComponent implements OnInit {

   @ViewChild(NgbDatepicker, {static: true}) datepicker!: NgbDatepicker;

  constructor(public i18n: NgbDatepickerI18n) {}

  navigate(number: number) {
    const {state, calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', number));
  }

  today() {
    const {calendar} = this.datepicker;
    this.datepicker.navigateTo(calendar.getToday());
  }

  ngOnInit(): void {
  }

}
