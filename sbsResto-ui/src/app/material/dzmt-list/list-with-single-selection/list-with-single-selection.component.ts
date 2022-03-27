import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-with-single-selection',
  templateUrl: './list-with-single-selection.component.html',
  styleUrls: ['./list-with-single-selection.component.css']
})
export class ListWithSingleSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
   typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
