import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-decimal',
  templateUrl: './rating-decimal.component.html',
  styleUrls: ['./rating-decimal.component.css']
})
export class RatingDecimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  currentRate = 3.50;

}
