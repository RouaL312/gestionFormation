import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

export interface Vegetable {
    name: string;
}

@Component({
  selector: 'app-chips-drag-drop',
  templateUrl: './chips-drag-drop.component.html',
  styleUrls: ['./chips-drag-drop.component.css']
})
export class ChipsDragDropComponent implements OnInit {

  constructor() { }
  
  
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
  }

}
