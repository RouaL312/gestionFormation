import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-dynamic-grid-list',
  templateUrl: './dynamic-grid-list.component.html',
  styleUrls: ['./dynamic-grid-list.component.css']
})
export class DynamicGridListComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  
  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
