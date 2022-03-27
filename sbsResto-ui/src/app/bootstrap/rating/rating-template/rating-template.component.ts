import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-template',
  templateUrl: './rating-template.component.html',
  styleUrls: ['./rating-template.component.css']
})
export class RatingTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  currentRate = 6;

}
