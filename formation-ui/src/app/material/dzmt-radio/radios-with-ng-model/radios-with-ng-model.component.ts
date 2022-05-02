import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radios-with-ng-model',
  templateUrl: './radios-with-ng-model.component.html',
  styleUrls: ['./radios-with-ng-model.component.css']
})
export class RadiosWithNgModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


}
