import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-basic',
  templateUrl: './rating-basic.component.html',
  styleUrls: ['./rating-basic.component.css']
})
export class RatingBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  currentRate = 8;

}
