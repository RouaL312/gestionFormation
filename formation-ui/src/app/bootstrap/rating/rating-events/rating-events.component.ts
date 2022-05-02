import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-events',
  templateUrl: './rating-events.component.html',
  styleUrls: ['./rating-events.component.css']
})
export class RatingEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  selected = 0;
  hovered = 0;
  readonly = false;

}
