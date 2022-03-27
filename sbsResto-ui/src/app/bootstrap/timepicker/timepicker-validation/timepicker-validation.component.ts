import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-timepicker-validation',
  templateUrl: './timepicker-validation.component.html',
  styleUrls: ['./timepicker-validation.component.css']
})
export class TimepickerValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  ctrl = new FormControl('', (control: any) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return {tooEarly: true};
    }
    if (value.hour > 13) {
      return {tooLate: true};
    }

    return null;
  });

}
