import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar-height',
  templateUrl: './progressbar-height.component.html',
  styleUrls: ['./progressbar-height.component.css']
})
export class ProgressbarHeightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
  height = '20px';

}
