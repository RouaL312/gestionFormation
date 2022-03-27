import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-expansion-panel',
  templateUrl: './basic-expansion-panel.component.html',
  styleUrls: ['./basic-expansion-panel.component.css']
})
export class BasicExpansionPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  panelOpenState = false;

}
