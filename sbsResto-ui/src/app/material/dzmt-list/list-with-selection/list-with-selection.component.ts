import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-with-selection',
  templateUrl: './list-with-selection.component.html',
  styleUrls: ['./list-with-selection.component.css']
})
export class ListWithSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
