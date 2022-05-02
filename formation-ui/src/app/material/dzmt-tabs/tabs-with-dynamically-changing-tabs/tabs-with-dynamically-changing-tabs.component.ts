import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-tabs-with-dynamically-changing-tabs',
  templateUrl: './tabs-with-dynamically-changing-tabs.component.html',
  styleUrls: ['./tabs-with-dynamically-changing-tabs.component.css']
})
export class TabsWithDynamicallyChangingTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

}
