import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-meridian',
  templateUrl: './timepicker-meridian.component.html',
  styleUrls: ['./timepicker-meridian.component.css']
})
export class TimepickerMeridianComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

}
