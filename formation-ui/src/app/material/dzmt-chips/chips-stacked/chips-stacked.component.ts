import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-chips-stacked',
  templateUrl: './chips-stacked.component.html',
  styleUrls: ['./chips-stacked.component.css']
})
export class ChipsStackedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

}
