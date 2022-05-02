import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-basic',
  templateUrl: './timepicker-basic.component.html',
  styleUrls: ['./timepicker-basic.component.css']
})
export class TimepickerBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  time = {hour: 13, minute: 30};

}
